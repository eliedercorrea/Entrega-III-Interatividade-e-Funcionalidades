// features/toast.js
export function showToast(message, timeout=3000){
  let el = document.querySelector('#toast');
  if(!el){
    el = document.createElement('div'); el.id='toast';
    el.style.position='fixed'; el.style.right='16px'; el.style.bottom='16px';
    el.style.background='rgba(17,24,39,.95)'; el.style.color='#e5e7eb';
    el.style.border='1px solid #1f2937'; el.style.borderRadius='12px';
    el.style.padding='12px 14px'; el.style.zIndex='1000'; el.style.boxShadow='0 10px 30px rgba(0,0,0,.35)';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.style.display='block';
  setTimeout(()=> el.style.display='none', timeout);
}