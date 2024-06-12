import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState('Matheus Borges');

  const [tarefas, setTarefas] = useState([]);

  const [loadingCarregar, setLoadingCarregar] = useState(false);
  const [loadingCriar, setLoadingCriar] = useState(false);
  const [loadingEditar, setLoadingEditar] = useState(null);
  const [loadingDeletar, setLoadingDeletar] = useState(null);

  const atrasoRequisicao = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const carregarTarefas = async () => {
    setLoadingCarregar(true);

    await atrasoRequisicao();

    // O objeto de retorno da requisição é desestruturado para pegar o valor de data
    // que é o array de tarefas e caso não exista valor, é atribuído um array vazio
    const {data = []} = await api.get('/tarefas');

    setTarefas([
      ...data,
    ]);

    setLoadingCarregar(false);
  };

  const adicionarTarefas = async (nomeTarefa) => {
    setLoadingCriar(true);

    await atrasoRequisicao();

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

    setLoadingCriar(false);
  }

  const removerTarefas = async (idTarefa) => {
    setLoadingDeletar(idTarefa);

    await atrasoRequisicao();

    await api.delete(`/tarefas/${idTarefa}`);

    setTarefas(estadoAtual => {
      const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id !== idTarefa);
    
      return [
        ...tarefasAtualizadas,
      ];
    });

    setLoadingDeletar(null);
  };

  const editarTarefas = async (idTarefa, nomeTarefa) => {
    setLoadingEditar(idTarefa);

    await atrasoRequisicao();

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

    setLoadingEditar(null);
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
        loadingCarregar,
        loadingCriar,
        loadingEditar,
        loadingDeletar,
    }}>
      {children}
    </AppContext.Provider>
  );
};