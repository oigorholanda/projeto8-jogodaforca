import styled from "styled-components"

export default function Chute() {
    return (
        <ChuteContainer>
            Já sabe a palavra?
            <InputChute type="text" name="" id="" />
            <BotaoChute disabled>Chutar</BotaoChute>
        </ChuteContainer>
    )
}

const ChuteContainer = styled.div`
    width: 80vh;
    display: flex;
    font-size: 20px;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    font-family: 'Roboto', sans-serif;
`

const InputChute = styled.input`
    width: 353px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
`
const BotaoChute = styled.button`
    width: 100px;
    height: 40px;
    font-size: 16px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    &:hover {cursor: pointer;}
    &:disabled {cursor: inherit;}
`
