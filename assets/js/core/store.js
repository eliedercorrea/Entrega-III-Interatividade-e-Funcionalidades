// core/store.js
const KEY = 'vida_solidaria_db_v1';

function load(){
  try{ return JSON.parse(localStorage.getItem(KEY)) || { registros: [] }; }
  catch{ return { registros: [] }; }
}
function save(data){ localStorage.setItem(KEY, JSON.stringify(data)); }

export const DB = {
  all(){ return load().registros; },
  add(item){
    const db = load();
    db.registros.push({ id: crypto.randomUUID(), createdAt: Date.now(), ...item });
    save(db);
  },
  clear(){
    save({ registros: [] });
  }
};