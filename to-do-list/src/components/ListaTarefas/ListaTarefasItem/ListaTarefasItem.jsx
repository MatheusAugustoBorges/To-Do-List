import { useState } from "react";
import { useAppContext } from "../../../hooks";

import { Botao, TIPO_BOTAO, CampoTexto, Loading } from "../../../components";

import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;
  
  const { removerTarefas, editarTarefas, loadingEditar, loadingDeletar } = useAppContext();

  const [estaEditando, setEstaEditando] = useState(false);

  const onBlurTarefa = (event) => {
    // Foi declarado como constante porque o atributo onBlur garante que a interação do usuário 
    // com o campo de texto foi finalizada, isto é, o usuário já havia escrito toda a tarefa
    // Por isso pode ser declarado como const porque não haverá alteração no valor de novoTarefa.
    const novoTarefa = event.currentTarget.value;

    editarTarefas(id, novoTarefa);

    setEstaEditando(false);
  };

  const loadingEstaEditando = loadingEditar == id;
  const loadingEstaDeletando = loadingDeletar == id;

  return (
      <li className={style.ListaTarefasItem}>
        {loadingEstaEditando || estaEditando && (
          <CampoTexto 
            defaultValue={nome}
            onBlur={onBlurTarefa}
            autoFocus
          />
        )}
      
        {!loadingEstaEditando && !estaEditando && (
          <span
            onDoubleClick={() => setEstaEditando(true)}
          >
            {nome}
          </span>
        )}

        {loadingEstaEditando && <Loading />}

        <Botao 
          texto={loadingEstaDeletando ? <Loading /> : "-"}
          tipo={TIPO_BOTAO.SECUNDARIO} 
          onClick={() => removerTarefas(id)}
        />
      </li>
  )
}

export { ListaTarefasItem }

// O onBlur realizar ações quando um usuário termina de interagir com um elemento. 
// No caso em questão, o campo de texto. 