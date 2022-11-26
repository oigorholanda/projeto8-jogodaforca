import styled from 'styled-components'
import forca from '../assets/forca0.png'

export default function Jogo() {
    return (
        <ContainerJogo>
            <img src={forca} alt="forca" />
            <Palavra>
                    - - - - - -
                </Palavra>
            <BotaoTop>
                <button>Escolher palavra</button>

            </BotaoTop>

        </ContainerJogo>
    )
}

const ContainerJogo = styled.div`
    width: 60vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 40px;
    img {
        width: 400px;
    }
`

const Palavra = styled.div`
    display: flex;
    align-items: flex-end;
`

const BotaoTop = styled.div`
    width: 192px
`