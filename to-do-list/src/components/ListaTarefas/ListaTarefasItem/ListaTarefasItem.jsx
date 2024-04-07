import { useState } from "react";
import { useAppContext } from "../../../hooks";

import { Botao, TIPO_BOTAO, CampoTexto } from "../../../components";

import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { removerTarefas, editarTarefas } = useAppContext();

  return (
      <li className={style.ListaTarefasItem}>
        {estaEditando ? (
          <CampoTexto 
            defaultValue={nome}
            onChange={event => editarTarefas(id, event.currentTarget.value)}
            onBlur={() => setEstaEditando(false)}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => setEstaEditando(true)}
          >
            {nome}
          </span>
        )}
        <Botao 
          texto="-" 
          tipo={TIPO_BOTAO.SECUNDARIO} 
          onClick={() => removerTarefas(id)}
        />
      </li>
  )
}

export { ListaTarefasItem }