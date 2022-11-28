import styled from "styled-components"

export default function Chute(props) {
    return (
        <ChuteContainer>
            Já sabe a palavra?
            <InputChute disabled={props.disabled}  type="text" name="" id="" />
            <BotaoChute disabled={props.disabled}>Chutar</BotaoChute>
        </ChuteContainer>
    )
}

const ChuteContainer = styled.div`
    width: 40vw;
    display: flex;
    font-size: 20px;
    gap: 5px;
    min-width: 570px;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    font-family: 'Roboto', sans-serif;
`

const InputChute = styled.input`
    width: 20vw;
    height: 40px;
    min-width: 260px;
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
