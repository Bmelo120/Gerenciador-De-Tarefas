const express = require('express');
const cors = require('cors');
const app = express();
const { conectarBanco } = require('./models/Conectdb');
const tarefaRoutes = require('./Routes');

app.use(cors());
app.use(express.json()); // Utiliza JSON
app.use('/api', tarefaRoutes); // Trata as rotas

//Sincroniza o banco e inicia o servidor 

const PORT = 3000;

app.listen(PORT, async () => {
  await conectarBanco();
  console.log(`Servidor rodando na porta ${PORT}`);
});
