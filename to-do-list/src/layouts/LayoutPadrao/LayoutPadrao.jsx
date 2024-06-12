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

// O layout padrão é composto por três componentes: Cabecalho, Conteudo e Rodape.
// Ele serve para envolver as páginas da aplicação, de modo que elas tenham um padrão visual.
// O Outlet é um componente do React Router que serve para renderizar o conteúdo da rota atual.

// Exemplo: Se a rota atual for /sobre-nos, o Outlet renderizará o componente SobreNos...
// ... no lugar do outlet, que é onde o conteúdo da rota é renderizado.
// Dessa forma a toda página será constituída de cabeçalho, conteúdo(Sobre-nos) e rodapé.

// Exemplo: Se a rota atual for /, o Outlet renderizará o componente Inicial (input de texto...
// ... e lista de tarefas) no lugar do outlet, que é onde o conteúdo da rota é renderizado.
// Dessa forma a toda página será constituída de cabeçalho, conteúdo(Inicial) e rodapé.

