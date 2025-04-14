const sequelize = require('../db');
const Tarefa = require('./Tarefa');

const conectarBanco = async () => {
    await sequelize.authenticate();
    await sequelize.sync(); 
};

module.exports = { conectarBanco, Tarefa };
