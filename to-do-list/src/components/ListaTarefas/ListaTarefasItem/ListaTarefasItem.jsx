import { Botao, TIPO_BOTAO } from "../../Botao";
import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { nome } = props;

  return (
      <li className={style.ListaTarefasItem}>
          {nome}
          <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li>
  )
}

export { ListaTarefasItem }