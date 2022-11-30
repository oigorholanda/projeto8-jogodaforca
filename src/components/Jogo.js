import { useState } from 'react';
import styled from 'styled-components'
import forca0 from '../assets/forca0.png'
import forca1 from '../assets/forca1.png'
import forca2 from '../assets/forca2.png'
import forca3 from '../assets/forca3.png'
import forca4 from '../assets/forca4.png'
import forca5 from '../assets/forca5.png'
import forca6 from '../assets/forca6.png'

export default function Jogo(props) {
    
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    
    function IniciarJogo() {
        props.habilitar(false)
        console.log(props.erros)
        if (props.erros < 6) {
            props.contarerros(props.erros+1)
        } 
    }

    return (
        <ContainerJogo>
            <img src={imagens[props.erros]} alt="forca" />
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