import axios from 'axios'

export interface Task {
    titulo: string;
    descricao: string;
    dataInicio: string;
    dataConclusao: string;
  }

//criando uma instância do axios 
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const criarTarefa = (novaTarefa: Task) => api.post('/tarefas', novaTarefa);

export const getTarefas = () => api.get('/tarefas');

// export const marcarComoLida = (id) => api.put(`/tarefas/${id}/lida`);

// export const excluirTarefa = (id) => api.delete(`/tarefas/${id}`);

export default api; 