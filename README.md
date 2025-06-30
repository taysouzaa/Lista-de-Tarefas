# 📋 Lista de Tarefas ( To Do List )

Uma aplicação web moderna para organizar suas tarefas do dia a dia, feita com React.

---

## Funcionalidades

- Adicionar, editar e remover tarefas
- Marcar tarefas como concluídas
- Limpar todas as tarefas
- Definir prioridade (Baixa, Média, Alta) para cada tarefa
- Visualizar data e hora de criação da tarefa
- Filtros para visualizar todas, pendentes ou concluídas
- Contador de tarefas pendentes e concluídas
- Tema claro e escuro
- Salva as tarefas no armazenamento local do navegador (localStorage)
- Interface responsiva e estilizada

---

## Tecnologias Utilizadas

- **Linguagem principal:** JavaScript (ES6+)
- **Framework:** [ReactJS](https://react.dev/)
- **Estilização:** CSS3 (customizado, responsivo e com tema escuro/claro)
- **Gerenciamento de estado:** React Hooks (`useState`, `useEffect`)
- **Armazenamento:** LocalStorage do navegador
- **Ferramentas:** Node.js, npm (ou yarn)

---

## Estrutura dos arquivos principais

- **src/App.js**  
  Componente principal React. Contém toda a lógica da lista de tarefas, funções para adicionar, editar, remover, marcar como concluída, filtros, tema escuro/claro e salvar no localStorage. Também define o layout da tela.

- **src/App.css**  
  Arquivo de estilos. Responsável por todo o visual da aplicação: centralização, cores, botões, responsividade, tema escuro/claro e detalhes visuais.

- **package.json**  
  Arquivo de configuração do projeto. Lista as dependências (React, etc), scripts para rodar o projeto (`npm start`), e outras configurações.

---

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o projeto:
   ```bash
   npm start
   ```
3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Como funciona

- As tarefas são salvas automaticamente no navegador (localStorage).
- Você pode adicionar, editar, marcar como concluída ou remover tarefas.
- O layout é centralizado, com título destacado e botões estilizados.
- O contador mostra quantas tarefas estão pendentes e quantas já foram concluídas.
- O tema pode ser alternado entre claro e escuro.

---

## Personalização

- Para mudar o visual, edite o arquivo `src/App.css`.
- Para alterar a lógica ou adicionar novas funções, edite `src/App.js`.

---

## Screenshots

![Captura de tela 2025-06-30 111240](https://github.com/user-attachments/assets/589e9fec-f4da-49af-b7dc-d809857a3c0d)
![Listadetarefasatualizadas pt1](https://github.com/user-attachments/assets/7fcf51a0-1f6f-450a-9e6f-3ee07e08f32d)


---

Feito com 💙 usando ReactJS
