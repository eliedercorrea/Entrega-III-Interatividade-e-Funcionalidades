// templates/projetos.js
import { html } from '../core/dom.js';
export function Projetos(){
  const items = [
    { titulo:'Reforço Escolar', tags:['Educação','Ativo'] },
    { titulo:'Horta Comunitária', tags:['Alimentação','Ativo'] },
    { titulo:'Mãos ao Trabalho', tags:['Renda','Inscrições'] },
  ];
  return html`
    <section class="container">
      <h1>Projetos</h1>
      <div class="grid">
        ${items.map(i => html`
          <article class="card">
            <h3>${i.titulo}</h3>
            <p class="mt-16">${i.tags.map(t=>`<span class="badge">${t}</span>`).join(' ')}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}