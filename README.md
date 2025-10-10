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
├─ index.html                 # SPA
└─ assets/
   ├─ css/                    # pode reutilizar o da Entrega II; inclui um main mínimo aqui
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
```

## Como rodar
- Abra `index.html` e use os links do topo para navegar. Tudo funciona sem build.
- Os cadastros ficam salvos no `localStorage` e aparecem na tabela da rota **Cadastro**.
- Erros de consistência aparecem em lista e como toast; sucesso abre modal.

## Publicar no GitHub
1. Crie um repositório **público** e envie estes arquivos (ou adicione a pasta `assets/js` ao projeto já publicado das Entregas I/II).
2. Ative o **GitHub Pages** (Branch `main`, diretório `/root`).
3. Envie o link público conforme solicitado.

Boa Entrega!