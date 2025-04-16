import axios from 'axios'

export interface Task {
    id?: string;
    nome: string;
    descricao: string;
    dataInicio: string;
    dataConclusao: string;
  }

//criando uma instância do axios 
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const criarTarefa = (novaTarefa: Task) => api.post('/tarefas', novaTarefa);

export const listarTarefas = () => api.get<Task[]>('/tarefas');

// export const marcarComoLida = (id) => api.put(`/tarefas/${id}/lida`);

// export const excluirTarefa = (id) => api.delete(`/tarefas/${id}`);

export default api; 