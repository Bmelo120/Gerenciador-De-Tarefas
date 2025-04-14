const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gerenciador_tarefas', 'root', '30451002',  {
  host: 'localhost', 
  dialect: 'mysql', 
});

module.exports = sequelize;
