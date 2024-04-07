import { CampoTexto, Botao, TIPO_BOTAO } from '../../components';

import style from './FormCriarTarefas.module.css';

const FormCriarTarefas = () => {

    return (
      <form className={style.FormCriarTarefas}>
        <CampoTexto />
        <Botao texto="+" />
      </form>
    );
};

export { FormCriarTarefas };

