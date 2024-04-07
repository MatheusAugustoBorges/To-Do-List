import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Outlet } from "react-router-dom";

const LayoutPadrao = () => {
    return (
      <>
        <Cabecalho nomeUsuario="Matheus" />
        <Conteudo>
            <Outlet />
        </Conteudo>
        <Rodape criador="Matheus Borges" />
      </>
    );
};

export { LayoutPadrao };

