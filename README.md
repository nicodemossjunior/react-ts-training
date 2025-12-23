# Cadastro de Pessoas com React, Vite e JSON Server

Este projeto é uma aplicação web simples para cadastro de pessoas, desenvolvida com React, TypeScript e Vite, utilizando um JSON Server como API de backend para persistência de dados.

## Funcionalidades

O aplicativo permite:

-   **Cadastrar Pessoas:** Adicionar novas pessoas com campos como Nome, CPF, Data de Nascimento, Email e Telefone (com máscara).
-   **Listar Pessoas:** Visualizar uma tabela com todas as pessoas cadastradas.
-   **Editar Pessoas:** Selecionar uma pessoa da lista para editar seus dados no formulário.
-   **Excluir Pessoas:** Remover pessoas da lista com uma confirmação.

## Tecnologias Utilizadas

-   **Frontend:**
    -   [React](https://react.dev/) (Biblioteca JavaScript para construção de interfaces de usuário)
    -   [TypeScript](https://www.typescriptlang.org/) (Superset tipado do JavaScript)
    -   [Vite](https://vitejs.dev/) (Ferramenta de build frontend)
-   **Backend (Mock API):**
    -   [JSON Server](https://github.com/typicode/json-server) (API REST full fake para prototipagem e desenvolvimento)
-   **Estilização:**
    -   CSS puro com tema escuro para coesão visual.

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou Yarn) instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd example-react-vite
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    # ou yarn install
    ```

### Executando o JSON Server

O JSON Server atua como nosso backend. Ele lerá o arquivo `db.json` para fornecer e persistir os dados.

1.  Em um terminal separado, inicie o JSON Server:
    ```bash
    npm run server
    # ou yarn server
    ```
    O servidor estará disponível em `http://localhost:3001`.

### Executando a Aplicação Frontend

1.  Em outro terminal, inicie o servidor de desenvolvimento do React:
    ```bash
    npm run dev
    # ou yarn dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Estrutura do Projeto

```
. 
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── cadastro/
│   │   │   └── Form.tsx
│   │   └── listagem/
│   │       ├── CustomDataTable.tsx
│   │       └── PessoaDetalhe.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── db.json
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```