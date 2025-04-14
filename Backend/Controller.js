const { Tarefa } = require('./models/Tarefa');

// Criar tarefa
exports.criarTarefa = async (req, res) => {
  try {
    const novaTarefa = await Tarefa.create(req.body); // Metodo create passando os dados do corpo da requisição
    res.status(201).json(novaTarefa);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
};

// Listar tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll(); // Busca todas as tarefas do banco
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar tarefas' });
  }
};

// Marcar como lida
exports.marcarComoLida = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id); // Busca o id da URL
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    // Marca como lida e salva
    tarefa.lida = true;
    await tarefa.save();
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao marcar tarefa' });
  }
};

// Excluir tarefa
exports.excluirTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByPk(req.params.id);  // Busca a tarefa pelo id da URL
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    await tarefa.destroy(); // detela 
    res.json({ mensagem: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir tarefa' });
  }
};
