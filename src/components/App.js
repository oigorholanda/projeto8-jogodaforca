import { useState } from 'react';
import styled from 'styled-components'
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from './palavras';

function App() {
  const [desabilitado, setdesabilitado] = useState(true);
  const [erros, setErros] = useState(0);


  return (
    <>
      <Titulo>Jogo da Forca</Titulo>
      <Jogo habilitar={setdesabilitado} palavras={palavras} erros={erros} contarerros={setErros}/>
      <Letras disabled={desabilitado}/>
      <Chute disabled={desabilitado}/>
    </>
  );
}



const Titulo = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 60px;
  font-family: 'Roboto', sans-serif;
  color : orange;
  text-shadow: 2px 2px black;
`

export default App;
