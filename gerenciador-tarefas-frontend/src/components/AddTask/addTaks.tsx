import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Dialog, DialogTitle } from "@mui/material";
import { DialogFields, Icon, DialogActions, DialogContainer} from "./stylesAddTask";
import { criarTarefa, Task } from "../../services/api"
  

const AddTask = ( ) => {
    const [open, setOpen] = useState(false)
    const [newTask, setNewTask] = useState<Task>({
        nome: '',
        descricao: '',
        dataInicio: '',
        dataConclusao: '',
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSave = async () => {
        try {
            await criarTarefa(newTask);
            alert("Tarefa criada com sucesso!");
            setNewTask({
              nome: '',
              descricao: '',
              dataInicio: '',
              dataConclusao: '',
            });
            handleClose();
            window.location.reload();
          } catch (error) {
            console.error("Erro ao criar tarefa:", error);
            alert("Erro ao criar tarefa");
          }
    }

    return (
        <>
            <Icon>
                <AddCircleIcon onClick={handleClickOpen} />
            </Icon>

            <Dialog 
                open={open}
                keepMounted
                onClose={handleClose}
            >
            <DialogContainer>
                <DialogTitle> Nova Tarefa </DialogTitle>
       
                <DialogFields>
                    <input
                        type="text"
                        placeholder="Nome da Tarefa"
                        name="nome"
                        value={newTask.nome}
                        onChange={(e) => setNewTask({...newTask, nome: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        value={newTask.descricao}
                        onChange={(e) => setNewTask({...newTask, descricao: e.target.value})}
                    />
                    <input
                        type="date"
                        placeholder="Data de inicio"
                        name="dataInico"
                        value={newTask.dataInicio}
                        onChange={(e) => setNewTask({...newTask, dataInicio: e.target.value})}
                    />
                    <input
                        type="date"
                        placeholder="Data de conclusão"
                        name="dataConclusao"
                        value={newTask.dataConclusao}
                        onChange={(e) => setNewTask({...newTask, dataConclusao: e.target.value})}
                    />   

                </DialogFields>
   
                <DialogActions>
                    <Button onClick={handleClose}> Fechar </Button>
                    <Button onClick={handleSave}> Salvar </Button>
                </DialogActions>
            </DialogContainer>
            </Dialog>
        </>
    )
}

export default AddTask;