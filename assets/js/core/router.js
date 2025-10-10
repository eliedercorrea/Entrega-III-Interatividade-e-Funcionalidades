// core/router.js
import { $, $$ } from './dom.js';

export class Router {
  constructor(routes){
    this.routes = routes;
    window.addEventListener('hashchange', ()=> this.resolve());
    window.addEventListener('load', ()=> this.resolve());
  }
  resolve(){
    const hash = window.location.hash || '#/home';
    const [_, path] = hash.split('#/');
    const route = this.routes[path] ? path : 'home';
    this.highlightNav(route);
    this.routes[route]();
  }
  highlightNav(route){
    $$('.nav a').forEach(a => a.classList.remove('active'));
    const link = $(`.nav a[href="#/${route}"]`);
    if(link) link.classList.add('active');
  }
}