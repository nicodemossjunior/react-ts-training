# People Registration with React, Vite, and JSON Server

This project is a simple web application for person registration, developed with React, TypeScript, and Vite, using a JSON Server as a backend API for data persistence.

## Features

The application allows you to:

-   **Register People:** Add new people with fields like Name, CPF (Brazilian individual taxpayer registry), Date of Birth, Email, and Phone (with input mask).
-   **List People:** View a table with all registered people.
-   **Edit People:** Select a person from the list to edit their data in the form.
-   **Delete People:** Remove people from the list with a confirmation prompt.

## Technologies Used

-   **Frontend:**
    -   [React](https://react.dev/) (A JavaScript library for building user interfaces)
    -   [TypeScript](https://www.typescriptlang.org/) (A typed superset of JavaScript)
    -   [Vite](https://vitejs.dev/) (A frontend build tool)
-   **Backend (Mock API):**
    -   [JSON Server](https://github.com/typicode/json-server) (A full fake REST API for prototyping and development)
-   **Styling:**
    -   Pure CSS with a dark theme for visual cohesion.

## How to Run the Project

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or Yarn) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd example-react-vite
    ```

2.  Install the project dependencies:
    ```bash
    npm install
    # or yarn install
    ```

### Running the JSON Server

The JSON Server acts as our backend. It will read the `db.json` file to provide and persist data.

1.  In a separate terminal, start the JSON Server:
    ```bash
    npm run server
    # or yarn server
    ```
    The server will be available at `http://localhost:3001`.

### Running the Frontend Application

1.  In another terminal, start the React development server:
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another available port).

### Project Structure

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
