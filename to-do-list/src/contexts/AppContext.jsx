import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState('Matheus Borges');

  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = async () => {
    // O objeto de retorno da requisição é desestruturado para pegar o valor de data
    // que é o array de tarefas e caso não exista valor, é atribuído um array vazio
    const {data = []} = await api.get('/tarefas');

    setTarefas([
      ...data,
    ]);
  };

  const adicionarTarefas = async (nomeTarefa) => {
    // { data: tarefa } é a desestruturação do objeto de retorno da requisição
    // Aqui estamos extraindo o objeto retornado pela requisição e armazenando-o na variável tarefa
    // Ou seja, estamos pegando o array de tarefas contido em data e armazenando na variável tarefa

    //O retorno da requisição é um objeto com id e nome da tarefa já construído
    const { data: tarefa } = await api.post('/tarefas', {
      nome: nomeTarefa,
    }); 

    setTarefas(estadoAtual => {
      return [
        ...estadoAtual, 
        tarefa
      ];
    });
  }

  const removerTarefas = async (idTarefa) => {
    await api.delete(`/tarefas/${idTarefa}`);

    setTarefas(estadoAtual => {
      const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id !== idTarefa);
    
      return [
        ...tarefasAtualizadas,
      ];
    });
  };

  const editarTarefas = async (idTarefa, nomeTarefa) => {
    const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
      nome: nomeTarefa,
    });

    setTarefas(estadoAtual => {
      const tarefasAtualizadas = estadoAtual.map(tarefa => {
        return tarefa.id === idTarefa ? {
          ...tarefa,
          nome: tarefaAtualizada.nome,
        } : tarefa;
      });

      return [
        ...tarefasAtualizadas,
      ];
    });
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider value={{
        criador,
        tarefas, 
        adicionarTarefas,
        removerTarefas,
        editarTarefas,
    }}>
      {children}
    </AppContext.Provider>
  );
};