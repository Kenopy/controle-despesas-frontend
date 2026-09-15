# 💰 Controle Financeiro Web

Esta é a aplicação Front-end do sistema de **Controle Financeiro**, desenvolvida para facilitar o registro, gerenciamento e visualização de despesas diárias/pessoais.

Atualmente, a aplicação atua como um CRUD (Create, Read, Update, Delete) de despesas e está sendo preparada para evoluir para um Dashboard completo com gráficos e filtros avançados.

## 🛠️ Tecnologias Utilizadas

*   **Framework:** [Angular](https://angular.dev/) (Standalone Components)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Linter & Formatter:** ESLint e Prettier
*   **Integração:** API RESTful construída em Java com Spring Boot e banco de dados via Docker.

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. O projeto foi gerado utilizando o Angular CLI.

1. Clone este repositório:
   ```bash
   git clone URL_DO_SEU_REPOSITORIO
Acesse a pasta do projeto:

Bash
cd controle-financeiro-web
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
ng serve
Acesse http://localhost:4200/. A aplicação será recarregada automaticamente caso você altere qualquer arquivo fonte.

⚙️ Comandos Úteis do Angular CLI
Criar um novo componente: ng generate component nome-do-componente

Gerar a build de produção: ng build (os arquivos otimizados serão salvos na pasta dist/)

Rodar testes unitários: ng test (utilizando o test runner configurado)
