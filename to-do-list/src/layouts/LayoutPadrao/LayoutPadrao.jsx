import { Outlet } from "react-router-dom";
import { useAppContext } from "../../hooks";

import { Cabecalho, Conteudo, Rodape } from "../../components";

const LayoutPadrao = () => {
  const { criador } = useAppContext();

  return (
    <>
      <Cabecalho nomeUsuario="Matheus" />
      <Conteudo>
          <Outlet />
      </Conteudo>
      <Rodape criador={criador} />
    </>
  );
};

export { LayoutPadrao };

