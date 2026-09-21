(function(){
  const frame=document.getElementById('webinar-registration');
  if(!frame)return;
  const base=frame.getAttribute('data-base-src');
  const sourceParams=new URLSearchParams(window.location.search);
  const allowed=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const target=new URL(base);
  allowed.forEach(key=>{
    const value=sourceParams.get(key);
    if(value)target.searchParams.set(key,value);
  });
  frame.setAttribute('data-tally-src',target.toString());
  frame.src=target.toString();
  if(window.Tally&&window.Tally.loadEmbeds)window.Tally.loadEmbeds();
})();