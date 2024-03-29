import React from 'react'
import styled from 'styled-components';
import fundocard from "../assets/pngwing 2.png"
import logoab from "../assets/Vector-2.png"
import { useNavigate } from 'react-router-dom';
import { irParaDetalhes } from '../routes/coordinator';

const Card = styled.section`
position: absolute;
width: 440px;
height: 210px;
left: 0px;
top: 0px;
background: #729F92;
border-radius: 12px;
`

const Number = styled.span`
    position: absolute;
    width: 30px;
    height: 19px;
    left: 23px;
    top: 25px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
`

const PokeName = styled.span`
    position: absolute;
    width: 159px;
    height: 39px;
    left: 23px;
    top: 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    color: #FFFFFF;
`

const LinkDetalhes = styled.div`
    width: 74px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-decoration-line: underline;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    cursor: pointer;

    :actvive {
        transition-timing-function: ease-out;
        transition: 300ms;
    }
`

const AddPoke = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    width: 146px;
    height: 38px;

    background: #FFFFFF;
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`

const FundoCard = styled.div`
    background-image: url(${fundocard});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    width: 210.73px;
    height: 210.73px;
    left: 294.37px;
    top: -62px;

   
    opacity: 0.17;
    
`

const Abilidades = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;

    position: absolute;
    width: 99px;
    height: 31px;
    left: 23px;
    top: 89px;

    background: #70B873;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
`

const LogoAbilidades = styled.img`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #FFFFFF;
`

const NomeAbilidade = styled.div`
    width: 46px;
    height: 21px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`

const GoToAdd = styled.div`
    display: flex;
    width: 78px;
    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #0F0F0F;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    cursor: pointer;
`

const CardPoke = (props) => {
    const navigate = useNavigate()

    const { id, name } = props.poke
  return (
    <Card>
        <FundoCard></FundoCard>
       
        <Number>#{id}</Number>
        <PokeName>{name}</PokeName>
        <br />
        <Abilidades>
            <LogoAbilidades src={logoab}/>
            <NomeAbilidade>Grass</NomeAbilidade>
        </Abilidades>
        <br />
        <LinkDetalhes >Detalhes</LinkDetalhes>
        <AddPoke><GoToAdd>Capturar!</GoToAdd></AddPoke>
    </Card>
  )
}

export default CardPoke