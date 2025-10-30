# Entrega III – Interatividade e Funcionalidades (JavaScript)

**Objetivo:** transformar o site em uma **SPA (Single Page Application)** com **templates JS**, **manipulação do DOM**, **armazenamento local (localStorage)** e **verificação de consistência de dados** no formulário.

## Como foi implementado
- **SPA** com roteamento por hash (`#/home`, `#/projetos`, `#/cadastro`) em `assets/js/core/router.js` + `app.js`.
- **Templates** JavaScript que geram HTML (`templates/home.js`, `templates/projetos.js`, `templates/cadastro.js`).
- **Manipulação do DOM** e helpers em `core/dom.js` (`render`, `html`, `$`, `$$`, `el`).
- **Armazenamento** com `localStorage` em `core/store.js` (lista de registros).
- **Validação e consistência** em `features/validation.js`:
  - Regras nativas + regras avançadas: CPF (dígitos verificadores), telefone BR, CEP, e-mail, data (>=16 anos), nome com nome e sobrenome.
  - Exibição de erros agregados no DOM.
- **Feedback ao usuário**: `toast` e `modal` em `features/toast.js` e `features/modal.js`.
- **Código modular por funcionalidade** (core/features/templates).

## Estrutura
```
entrega_III_site/
├─ index.html
└─ assets/
   ├─ css/
   │  ├─ main.css
   │  ├─ base.css
   │  ├─ layout.css
   │  ├─ components.css
   │  └─ utilities.css
   ├─ img/
   │  └─ logo.svg
   └─ js/
      ├─ app.js
      ├─ core/
      │  ├─ dom.js
      │  ├─ router.js
      │  └─ store.js
      ├─ features/
      │  ├─ validation.js
      │  ├─ toast.js
      │  └─ modal.js
      └─ templates/
         ├─ home.js
         ├─ projetos.js
         └─ cadastro.js
