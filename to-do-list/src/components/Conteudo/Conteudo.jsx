import style from './Conteudo.module.css';

const Conteudo = (props) => {
  const { children } = props;

  return (
      <div className={style.Conteudo}>
        {children}
      </div>
  );
};

export { Conteudo };

// O Children significa que tudo que o componente recebe como filho, será renderizado dentro dele.
// Isto é, o que a tag <Conteudo> recebe como filho é o que será renderizado por ela.