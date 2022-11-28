import styled from "styled-components"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    return (
        <ListaLetras>
            {alfabeto.map(L => <Letra disabled={props.disabled}>{L.toUpperCase()}</Letra>)}
        </ListaLetras>
    )
}

const ListaLetras = styled.ul`
    width: 600px;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5px;
    margin: auto;
    margin-bottom: 40px;
    font-family: 'Roboto', sans-serif;
`

const Letra = styled.button`
    width: 40px;
    height: 40px;
    background: #9FAAB5;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {cursor: pointer;}
    &:disabled {cursor: inherit;}
`