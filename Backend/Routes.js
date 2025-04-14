const express = require('express');
const router = express.Router();
const tarefaController = require('./Controller');

// Rota para criar uma nova tarefa
router.post('/tarefas', tarefaController.criarTarefa);

// Rota para listar todas as tarefas
router.get('/tarefas', tarefaController.listarTarefas);

// Rota para marcar uma tarefa como lida
router.put('/tarefas/:id/lida', tarefaController.marcarComoLida);

// Rota para excluir uma tarefa
router.delete('/tarefas/:id', tarefaController.excluirTarefa);

module.exports = router;
