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
    const body = await response.text();
    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "text/plain; charset=utf-8");
    res.send(body);
  } catch (error) {
    res.status(500).json({ error: String(error?.message || error) });
  }
}
