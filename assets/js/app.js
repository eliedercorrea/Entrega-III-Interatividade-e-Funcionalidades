// app.js
import { $, render } from './core/dom.js';
import { Router } from './core/router.js';
import { Home } from './templates/home.js';
import { Projetos } from './templates/projetos.js';
import { Cadastro, mountCadastroInteractions } from './templates/cadastro.js';

const app = $('#app');

function mount(view){
  render(app, view());
  if(window.location.hash.startsWith('#/cadastro')){
    mountCadastroInteractions();
  }
}

new Router({
  'home': () => mount(Home),
  'projetos': () => mount(Projetos),
  'cadastro': () => mount(Cadastro),
});

// Initial route (in case no hash)
if(!window.location.hash){ window.location.hash = '#/home'; }