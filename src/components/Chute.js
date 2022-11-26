import styled from "styled-components"

export default function Chute() {
    return (
        <ChuteContainer>
            Já sei a palavra!
            <input type="text" name="" id="" />
            <button >Chutar</button>
        </ChuteContainer>
    )
}

const ChuteContainer = styled.div`
    width: 90vh;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    font-family: 'Roboto', sans-serif;
`