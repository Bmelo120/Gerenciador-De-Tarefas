import { List, Title } from "./stylesListTask"

const ListTask = () => {
    return (
        <>
        <Title> Lista de Tarefas </Title>
        <ul>
            <input type="checkbox" id="options-view-button" /><List> Teste tarefa 1</List>
        </ul>
        </>
    )
}

export default ListTask