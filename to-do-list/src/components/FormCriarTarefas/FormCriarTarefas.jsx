import { useState } from "react";

import { useAppContext } from "../../hooks";

import { CampoTexto, Botao, TIPO_BOTAO } from '../../components';

import style from './FormCriarTarefas.module.css';

const FormCriarTarefas = () => {
  const { adicionarTarefas } = useAppContext();

  const [ nomeTarefa, setNomeTarefa ] = useState(''); 

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  }
  
  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) {
      return;
    }

    adicionarTarefas(nomeTarefa);

    setNomeTarefa('');
  }

  return (
    <form 
      className={style.FormCriarTarefas}
      onSubmit={submeterFormulario}
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

