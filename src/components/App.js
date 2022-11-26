import styled from 'styled-components'
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

function App() {
  return (
    <>
      <Titulo>Jogo da Forca</Titulo>
      <Jogo/>
      <Letras/>
      <Chute/>
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
