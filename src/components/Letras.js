import styled from "styled-components"

export default function Letras() {
    return (
        <ListaLetras>
            <div className="letra">
                A
            </div>
            <div className="letra">
                B
            </div>
            <div className="letra">
                C
            </div>
            <div className="letra">
                D
            </div>
            <div className="letra">
                E
            </div>
        </ListaLetras>
    )
}

const ListaLetras = styled.ul`
    width: 60vw;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    font-family: 'Roboto', sans-serif;
`