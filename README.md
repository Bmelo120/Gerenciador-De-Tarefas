📌 Desafio Proposto
Projeto Full Stack de Gerenciamento de Projetos. As funcionalidades implementadas estão descritas abaixo:

✅ Funcionalidades

 Criar uma tarefa (POST)

Adicionar à tarefa:

Nome

Descrição

Data de início

Data de conclusão

Listar todas as tarefas (GET)

Marcar uma tarefa como lida (PUT)

Excluir tarefas (DELETE)

#Back-end 

Foi utilizado Node.js e extrutura MVC express e esquelize com Mysql Workbench, rodando localmente. Com isso elaborei um video exibindo como funciona. Inicialmente escolhi e instalei o Mysql Workbench e fiz a criação manual do banco de dados, busquei documentoções para inspiração de modelos MVC para estruturar.

    - Db.js - Configura uma conexão com o um banco de dados MySQL usando Sequelize, a escolha do sequelize foi porque, permite interagir com bancos relacionais.
    - Models - Contem dois arquivos que definem e conectam o modelo de dados nomeado como Tarefa ao banco de dados MySQL, utilizando sequelize. Onde Tarera.js define a estrutura da tabela do banco e como os dados serão manipulados e Conectdb.js testa a conexão com o banco e sincroniza os modelos e cria a tabela. 
    - Controller.js - Contem três operações CRUD Create, Read e Detele.
    - Routes.js - Define as rotas da API
    - Index.js - Sincroniza com o Banco de dados e inicia o servidor.


#Front-end

Este projeto foi desenvolvido com React, TypeScript, Vite e Material UI, para componentização e organização do código.

#Services

    - api.ts - Esse arquivo configura a comunicação com o back-end utilizando o axios, para fazer requisições de criar e listar tarefas.

#Components 

    - AddTask - Esse componente é responsável por exibir um botão de adicionar tarefa e abrir um modal com um formulário para o usuário criar uma nova tarefa.
    - ListaTask - Esse componente tem a função de buscar e exibir na tela todas as tarefas salvas no banco.


