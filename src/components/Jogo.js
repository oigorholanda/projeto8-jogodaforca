import { useState } from 'react';
import styled from 'styled-components'
import forca from '../assets/forca6.png'

export default function Jogo(props) {

    
    function IniciarJogo() {
        props.habilitar(false)
        console.log("Letras Habilitadas")
    }

    return (
        <ContainerJogo>
            <img src={forca} alt="forca" />
            <Palavra>
            <BotaoTop onClick={IniciarJogo}>Escolher Nova Palavra</BotaoTop>

                - - - - - - - - - - - - - -
            </Palavra>


        </ContainerJogo>
    )
}

const ContainerJogo = styled.div`
    width: 60vw;
    height: 50vh;
    min-width: 680px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 55px;
    img {
        width: 400px;
    }
`

const Palavra = styled.div`
    width: 30vw;
    font-size: 50px;
    min-width: 412px;
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
    &:disabled {color: purple;}
`