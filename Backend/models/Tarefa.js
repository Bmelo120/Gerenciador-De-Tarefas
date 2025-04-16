const DataTypes  = require('sequelize');
const sequelize = require('../db');

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataConclusao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Tarefa;
