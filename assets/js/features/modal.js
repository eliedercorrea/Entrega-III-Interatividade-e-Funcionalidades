// features/modal.js
export function openModal(html){
  let overlay = document.querySelector('.modal-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.position='fixed'; overlay.style.inset='0'; overlay.style.background='rgba(0,0,0,.45)';
    overlay.style.display='flex'; overlay.style.alignItems='center'; overlay.style.justifyContent='center'; overlay.style.zIndex='900';
    const modal = document.createElement('div');
    modal.className='modal surface';
    modal.style.width='min(560px,92vw)';
    modal.innerHTML = `<div class="surface">${html}<div class="mt-16"><button id="closeModal" class="btn btn-primary">Fechar</button></div></div>`;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  } else {
    overlay.querySelector('.modal').innerHTML = `<div class="surface">${html}<div class="mt-16"><button id="closeModal" class="btn btn-primary">Fechar</button></div></div>`;
    overlay.style.display='flex';
  }
  overlay.addEventListener('click', (e)=> { if(e.target === overlay) overlay.style.display='none'; });
  overlay.querySelector('#closeModal').addEventListener('click', ()=> overlay.style.display='none');
}