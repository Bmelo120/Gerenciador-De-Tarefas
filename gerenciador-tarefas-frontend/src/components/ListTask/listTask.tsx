import { useEffect, useState } from "react";
import { List, Title } from "./stylesListTask"
import { listarTarefas, Task } from "../../services/api"

const ListTask = () => {
    const [tarefa, setTarefa] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTarefas = async () => {
            try{
            const response = await listarTarefas();
            console.log("tarefas:", response.data); 
            setTarefa(response.data);
            } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            }
        };
        fetchTarefas();
    }, [])


    return (
        <>
        <Title> Lista de Tarefas </Title>
        <ul>
            {tarefa.map((tarefas) => 
                <List key={tarefas.id}>
                    <input type="checkbox" id="options-view-button" />  
                    <strong>{tarefas.nome}</strong><br />
                    <strong> Descrição: </strong>{tarefas.descricao}<br />
                    <strong> Inicio: </strong>  {new Date(tarefas.dataInicio).toLocaleDateString()} <br />
                    <strong> Conclusão: </strong> {new Date(tarefas.dataConclusao).toLocaleDateString()}
                </List>
            )}
        </ul>
        </>
    )
}

export default ListTask