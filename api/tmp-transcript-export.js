export default async function handler(req, res) {
  try {
    const shareUrl = "https://chatgpt.com/share/6ab94c97-fc28-83ea-b7c1-79862099174b";
    const response = await fetch("https://chat-share-reader.vercel.app/mcp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        "Mcp-Protocol-Version": "2025-06-18"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "read_shared_chat",
          arguments: {
            url: shareUrl,
            format: "json",
            include_reasoning: false,
            include_tool_output: false
          }
        }
      })
    });

    if (!response.ok) {
      const txt = await response.text();
      res.status(response.status).send(txt);
      return;
    }

    const outer = JSON.parse(await response.text());
    const toolText = outer?.result?.content?.find?.(x => x?.type === "text")?.text;
    if (!toolText) throw new Error("Transcript payload missing");
    const transcript = JSON.parse(toolText);
    const src = Array.isArray(transcript.messages) ? transcript.messages : [];

    // Keep every user turn, and only the final user-visible assistant text
    // before the next user turn. This drops internal code/tool/reasoning artifacts
    // while preserving the visible conversational exchange.
    const filtered = [];
    let pendingAssistant = null;

    for (const m of src) {
      if (m.role === "user") {
        if (pendingAssistant) {
          filtered.push(pendingAssistant);
          pendingAssistant = null;
        }
        filtered.push({
          role: "user",
          text: m.text || "",
          createdAt: m.createdAt || null,
          contentType: m.contentType || null,
          attachments: m.attachments || []
        });
      } else if (m.role === "assistant") {
        const ct = m.contentType || "";
        if (ct === "text" || ct === "multimodal_text") {
          pendingAssistant = {
            role: "assistant",
            text: m.text || "",
            createdAt: m.createdAt || null,
            contentType: ct,
            attachments: m.attachments || []
          };
        }
      }
    }
    if (pendingAssistant) filtered.push(pendingAssistant);

    const payload = {
      source: transcript.source,
      url: transcript.url,
      title: transcript.title,
      updatedAt: transcript.updatedAt,
      originalMessageCount: transcript.messageCount,
      filteredMessageCount: filtered.length,
      messages: filtered
    };

    const { gzipSync } = await import("node:zlib");
    const compressed = gzipSync(Buffer.from(JSON.stringify(payload), "utf8"));
    const b64 = compressed.toString("base64");
    const chunkSize = 24000;
    const totalParts = Math.ceil(b64.length / chunkSize);
    const part = Number.parseInt(String(req.query?.part ?? "-1"), 10);

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    if (!Number.isInteger(part) || part < 0) {
      res.status(200).json({
        originalMessageCount: transcript.messageCount,
        filteredMessageCount: filtered.length,
        jsonBytes: Buffer.byteLength(JSON.stringify(payload), "utf8"),
        gzipBytes: compressed.length,
        base64Chars: b64.length,
        chunkSize,
        totalParts
      });
      return;
    }

    if (part >= totalParts) {
      res.status(416).json({ error: "part_out_of_range", totalParts });
      return;
    }

    res.status(200).json({
      part,
      totalParts,
      data: b64.slice(part * chunkSize, (part + 1) * chunkSize)
    });
  } catch (error) {
    res.status(500).json({ error: String(error?.message || error) });
  }
}
