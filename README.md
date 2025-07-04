
## Lista de Tarefas (To-Do List)

Este projeto é uma aplicação web desenvolvida com foco em produtividade pessoal.
Permite aos usuários adicionar, editar, remover e marcar tarefas, com persistência local via `localStorage`.

Desenvolvido com **React + TypeScript**, apresenta uma estrutura modular e interface simples e eficiente.

---

## Funcionalidades

* Adição e edição de tarefas
* Marcação de tarefas como concluídas
* Remoção de tarefas
* Armazenamento automático no navegador (localStorage)
* Interface leve e responsiva

---

## Estrutura do Projeto

```
lista-de-tarefas/
├── src/
│   ├── components/
│   │   ├── TaskItem.tsx      # Componente individual de tarefa
│   │   └── TaskList.tsx      # Lista de tarefas
│   ├── types/
│   │   └── index.ts          # Tipagens globais
│   ├── App.tsx               # Componente principal da aplicação
│   └── index.tsx             # Ponto de entrada do React
├── public/
│   └── index.html            # HTML base
├── package.json              # Dependências e scripts npm
├── tsconfig.json             # Configuração do TypeScript
└── README.md                 # Documentação do projeto
```

---

## Como Rodar Localmente

> Pré-requisitos: [Node.js](https://nodejs.org) instalado

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lista-de-tarefas.git

# Acesse o diretório
cd lista-de-tarefas

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

Acesse a aplicação no navegador:
[http://localhost:3000](http://localhost:3000)

---

## Tecnologias Utilizadas

* React
* TypeScript
* HTML e CSS
* localStorage (armazenamento local)

---

## Contribuição

Contribuições são bem-vindas!
Você pode:

1. Fazer um fork do repositório
2. Criar uma branch com suas alterações
3. Abrir um Pull Request

---

## Licença

Este projeto está licenciado sob a **MIT License**.
Consulte o arquivo `LICENSE` para mais informações.

---
