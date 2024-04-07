import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefas } = useAppContext();

  return (
      <li className={style.ListaTarefasItem}>
          {nome}
          <Botao 
            texto="-" 
            tipo={TIPO_BOTAO.SECUNDARIO} 
            onClick={() => removerTarefas(id)}
          />
      </li>
  )
}

export { ListaTarefasItem }