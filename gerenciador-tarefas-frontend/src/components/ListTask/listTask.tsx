import { useEffect, useState } from "react";
import { List, Title } from "./stylesListTask"
import { listarTarefas, Task } from "../../services/api"

const ListTask = () => {
    //controla o estado da tarefa que começa vazia para preencher com os dados do back-end
    const [tarefa, setTarefa] = useState<Task[]>([]);

    //Lista a tarefas 
    useEffect(() => {
        const fetchTarefas = async () => {
            try{
           // Faz uma requisição  
            const response = await listarTarefas();
            console.log("tarefas:", response.data);

            //atualiza o estado com o que ele recebe do banco
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
         {/* Para cada tarefa existente cria um item na lista e é pecorrida com um map para renderizar os campos */}
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