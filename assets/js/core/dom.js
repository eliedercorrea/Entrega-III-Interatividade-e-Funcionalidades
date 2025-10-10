// core/dom.js
export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
export const el = (tag, attrs={}, children=[]) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if(k.startsWith("on") && typeof v === "function"){ node.addEventListener(k.slice(2), v); }
    else if(k === "className"){ node.setAttribute("class", v); }
    else { node.setAttribute(k, v); }
  });
  children.flat().forEach(c => node.append(c instanceof Node ? c : document.createTextNode(c)));
  return node;
};
export const render = (root, html) => { root.innerHTML = html; };
export const html = (strings,...values) => strings.map((s,i)=> s + (values[i] ?? "")).join("");