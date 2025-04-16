# 📌 Desafio Proposto

Projeto Full Stack de **Gerenciamento de Projetos**. Funcionalidades propostas: 

- Criar uma tarefa (POST)
- Listar todas as tarefas (GET)
- Marcar uma tarefa como lida (PUT) 🔃 **em desenvolvimento**
- Excluir tarefas (DELETE) 🔃 **em desenvolvimento**

---


## Back-end 

Foi desenvolvido em Node.js, arquitetura MVC, utilizando Express e Sequelize com Mysql Workbench, rodando localmente. 

**OBS: Inicialmente escolhi e instalei o Mysql Workbench e fiz a criação manual do banco de dados, busquei documentações para inspiração de modelos MVC para estruturar.**

- Db.js - Configura a conexão com o um banco de dados MySQL usando Sequelize, a escolha do sequelize foi porque, permite interagir com bancos relacionais.

- Models - Contem dois arquivos modelos Sequelize:
  - Tarefa.js: Define a estrutura da tabela de tarefas.
  - Conectdb.js: Testa a conexão e sincroniza os modelos com o banco.

- Controller.js - Contem três operações CRUD Create, Read e Detele.

- Routes.js - Define as rotas da API

- Index.js - Sincroniza com o Banco de dados e inicia o servidor.


## Front-end

Desenvolvido com React, TypeScript, Vite e Material UI.

## Services

- api.ts -Arquivo resposável por configurar a comunicação com o back-end usando Axios para criar e listar tarefas.

## Components 

- AddTask - Componente responsável por exibir o botão de adicionar tarefa e abrir um modal com um formulário para criar uma nova tarefa.
- ListaTask - Componente responsável por buscar e exibir na tela todas as tarefas salvas no banco.


## Documentações utilizadas

https://www.luiztools.com.br/post/como-criar-uma-webapi-com-node-js-express-e-typescript/?utm_source=google&utm_medium=cpc&utm_campaign=12231680300&utm_content=151110166044&utm_term=webapi%20node%20express&gad_source=1&gclid=Cj0KCQjwqv2_BhC0ARIsAFb5Ac8DWBTCQEZubkQz6DN0nJzV9U3rui4Gi89qaTs_rk57zkS1T5Wkjd4aAjCDEALw_wcB

https://medium.com/@habbema/nodejs-padr%C3%A3o-mvc-2f4e16b79cb8

https://medium.com/@antusaha970/serving-react-and-express-together-mastering-mvc-in-mern-6a1c9664e69a

https://www.freecodecamp.org/portuguese/news/como-criar-um-app-em-react-com-o-back-end-em-node-o-guia-completo/
