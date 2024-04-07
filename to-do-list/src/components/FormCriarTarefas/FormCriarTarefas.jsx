import { useState } from "react";

import { CampoTexto, Botao, TIPO_BOTAO } from '../../components';

import style from './FormCriarTarefas.module.css';

const FormCriarTarefas = (props) => {
  const [ nomeTarefa, setNomeTarefa ] = useState(''); 

  const { setTarefas } = props;

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  }
  
  const adicionarTarefas = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    setTarefas(estadoAtual => {
      const tarefa = {
        id: estadoAtual.length + 1,
        nome: nomeTarefa,
      };

      return [...estadoAtual, tarefa];
    });

    setNomeTarefa('');
  }

  return (
    <form 
      className={style.FormCriarTarefas}
      onSubmit={adicionarTarefas}
    >
      <CampoTexto 
        value={nomeTarefa}
        onChange={onChangeNomeTarefa}
      />
      <Botao 
        texto="+" 
      />
    </form>
  );
};

export { FormCriarTarefas };

