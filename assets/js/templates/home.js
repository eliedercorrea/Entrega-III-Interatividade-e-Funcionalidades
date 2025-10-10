// templates/home.js
import { html } from '../core/dom.js';

export function Home(){
  return html`
    <section class="surface">
      <div class="container">
        <h1>SPA da Vida Solidária</h1>
        <p>Esta é uma Single Page Application com roteamento via hash, templates JS e armazenamento local.</p>
        <div class="grid mt-24">
          <article class="card"><h3>Design System</h3><p>Variáveis CSS, tipografia e espaçamento modular.</p></article>
          <article class="card"><h3>Interatividade</h3><p>DOM, eventos, toasts, modal e validação de dados.</p></article>
          <article class="card"><h3>Armazenamento</h3><p>Registros salvos no <code>localStorage</code>.</p></article>
        </div>
      </div>
    </section>
  `;
}