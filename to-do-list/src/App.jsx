import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';


import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Matheus"/>
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Matheus Borges"/>
    </>
    
  )
}

export { App };
