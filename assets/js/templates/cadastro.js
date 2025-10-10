// templates/cadastro.js
import { html } from '../core/dom.js';
import { validateRegistration } from '../features/validation.js';
import { DB } from '../core/store.js';
import { showToast } from '../features/toast.js';
import { openModal } from '../features/modal.js';

export function Cadastro(){
  return html`
    <section class="container">
      <h1>Cadastro</h1>
      <form id="cadForm" class="surface">
        <div class="grid">
          <div class="card">
            <label for="nome">Nome Completo *</label>
            <input id="nome" name="nome" type="text" required minlength="6" placeholder="Seu nome e sobrenome">
          </div>
          <div class="card">
            <label for="email">E-mail *</label>
            <input id="email" name="email" type="email" required placeholder="voce@email.com">
          </div>
          <div class="card">
            <label for="cpf">CPF *</label>
            <input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" required>
            <small class="muted">Com pontos e traço.</small>
          </div>
          <div class="card">
            <label for="telefone">Telefone *</label>
            <input id="telefone" name="telefone" type="tel" placeholder="(11) 90000-0000" required>
          </div>
          <div class="card">
            <label for="nascimento">Data de Nascimento *</label>
            <input id="nascimento" name="nascimento" type="date" required max="${new Date().toISOString().slice(0,10)}">
          </div>
          <div class="card">
            <label for="cep">CEP *</label>
            <input id="cep" name="cep" type="text" placeholder="00000-000" required>
          </div>
          <div class="card">
            <label for="endereco">Endereço *</label>
            <input id="endereco" name="endereco" type="text" required placeholder="Rua, número e complemento">
          </div>
          <div class="card">
            <label for="cidade">Cidade *</label>
            <input id="cidade" name="cidade" type="text" required>
          </div>
          <div class="card">
            <label for="estado">Estado *</label>
            <select id="estado" name="estado" required>
              <option value="">Selecione</option>
              <option>AC</option><option>AL</option><option>AP</option><option>AM</option><option>BA</option>
              <option>CE</option><option>DF</option><option>ES</option><option>GO</option><option>MA</option>
              <option>MT</option><option>MS</option><option>MG</option><option>PA</option><option>PB</option>
              <option>PR</option><option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
              <option>RS</option><option>RO</option><option>RR</option><option>SC</option><option>SP</option>
              <option>SE</option><option>TO</option>
            </select>
          </div>
          <div class="card">
            <label for="tipo">Quero participar como *</label>
            <select id="tipo" name="tipo" required>
              <option value="">Selecione</option>
              <option value="voluntario">Voluntário(a)</option>
              <option value="doador">Doador(a)</option>
              <option value="ambos">Ambos</option>
            </select>
          </div>
          <div class="card" style="grid-column:1/-1">
            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre você ou como deseja ajudar"></textarea>
          </div>
        </div>
        <div class="mt-16">
          <button class="btn btn-primary" type="submit">Enviar cadastro</button>
          <button class="btn" id="limpar" type="button">Limpar registros</button>
        </div>
        <div id="errors" class="mt-16"></div>
      </form>

      <div class="mt-24 surface">
        <h2>Registros salvos (localStorage)</h2>
        <table class="table" id="listaRegistros">
          <thead><tr><th>Nome</th><th>E-mail</th><th>Tipo</th><th>Criado</th></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </section>
  `;
}

export function mountCadastroInteractions(){
  const form = document.querySelector('#cadForm');
  const errorsBox = document.querySelector('#errors');
  const limpar = document.querySelector('#limpar');
  const tbody = document.querySelector('#listaRegistros tbody');

  const renderList = () => {
    const rows = DB.all().map(r => `<tr><td>${r.nome}</td><td>${r.email}</td><td>${r.tipo}</td><td>${new Date(r.createdAt).toLocaleString()}</td></tr>`).join('');
    tbody.innerHTML = rows || '<tr><td colspan="4"><em>Nenhum registro ainda.</em></td></tr>';
  };

  renderList();

  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    errorsBox.innerHTML = '';
    const result = validateRegistration(form);
    if(!result.valid){
      const list = Object.entries(result.errors).map(([field, msgs]) => `<li><strong>${field}:</strong> ${msgs.join(', ')}</li>`).join('');
      errorsBox.innerHTML = `<div class="alert danger"><ul>${list}</ul></div>`;
      showToast('Corrija os campos destacados', 2500);
      return;
    }
    DB.add(result.data);
    openModal(`<h3>Cadastro enviado!</h3><p>Obrigado por se cadastrar, <strong>${result.data.nome}</strong>.</p>`);
    form.reset();
    renderList();
  });

  limpar.addEventListener('click', ()=> {
    DB.clear();
    renderList();
    showToast('Registros limpos.');
  });
}