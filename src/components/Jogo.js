import styled from 'styled-components'
import forca from '../assets/forca6.png'

export default function Jogo() {
    return (
        <ContainerJogo>
            <img src={forca} alt="forca" />
            <Palavra>
            <BotaoTop>Escolher Palavra</BotaoTop>
                - - - - - - - - -
            </Palavra>


        </ContainerJogo>
    )
}

const ContainerJogo = styled.div`
    width: 55vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 55px;
    img {
        width: 400px;
    }
`

const Palavra = styled.div`
    width: 15vw;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const BotaoTop = styled.button`
    width: 185px;
    height: 55px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    background: #27AE60;
    border-radius: 8px;
    &:hover{cursor: pointer;}
`