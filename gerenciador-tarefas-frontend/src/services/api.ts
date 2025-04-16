import axios from 'axios'

//Define a estrutura da tarefa
export interface Task {
    id?: string;
    nome: string;
    descricao: string;
    dataInicio: string;
    dataConclusao: string;
  }

//criando uma instância do axios para usar apenas o caminho relativo
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

//Funções 
export const criarTarefa = (novaTarefa: Task) => api.post('/tarefas', novaTarefa);

export const listarTarefas = () => api.get<Task[]>('/tarefas');

// export const excluirTarefa = (id) => api.delete(`/tarefas/${id}`);

export default api; 