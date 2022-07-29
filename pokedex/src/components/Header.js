import React from 'react'
import { useNavigate } from 'react-router-dom';
import { irParaHome, irParaPokedex } from '../routes/coordinator';
import styled from 'styled-components';
import pokelogo from "../assets/pokelogo.png"
import seta from "../assets/eva_arrow-ios-back-outline.png"

const ContainerColor = styled.div`
    position: absolute;
    width: 1440px;
    height: 160px;
    left: 0px;
    top: 0px;
    background-color: #FFFFFF;
`

const Logo = styled.div`
    position: absolute;
    width: 307px;
    height: 113px;
    left: 566px;
    top: 21px;
    background-image: url(${pokelogo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const BotaoPokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  position: absolute;
  width: 287px;
  height: 74px;
  left: 1112px;
  top: 41px;
  background: #33A4F5;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
`

const NomeBotao = styled.p`
  width: 106px;
  height: 36px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #FFFFFF;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

const Seta = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 74px;
  top: 67px;
`

const TextoMudaPage = styled.div`
  position: absolute;
  width: 210px;
  height: 36px;
  left: 100px;
  top: 62px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  text-decoration-line: underline;
  cursor: pointer;

  color: #1A1A1A;
`

const BotaoRemove = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  position: absolute;
  width: 226px;
  height: 57px;
  left: 1174px;
  top: 51px;

  background: #FF6262;
  border-radius: 8px;
  border-style: none;
`

const TextoDetalhes = styled.div`
  width: 146px;
  height: 24px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #FFFFFF;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

function Header (props) {
  const navigate = useNavigate()

  const variacoesHeader = () => {
    switch(props.currentPage) {
      case "home":
        return (
          <ContainerColor>
            <Logo />
            <nav>
              <BotaoPokedex onClick={() => irParaPokedex(navigate)}><NomeBotao>Pokédex</NomeBotao></BotaoPokedex>
            </nav>
          </ContainerColor>
        )
      case "pokedex":
        return (
          <ContainerColor>
            <nav>
              <Seta src={seta}/>
              <TextoMudaPage onClick={() => irParaHome(navigate)}>Todos Pokémons</TextoMudaPage>
            </nav>
            <Logo />
          </ContainerColor>
        )
      case "details":
        return (
          <ContainerColor>
              <TextoMudaPage onClick={() => irParaHome(navigate)}>Todos Pokémons</TextoMudaPage>
              <Seta src={seta}/>
            <Logo />
          </ContainerColor>
        )
      default:
        <ContainerColor>
          <nav>
            <Logo />
            <BotaoRemove><TextoDetalhes>Excluir da Pokédex</TextoDetalhes></BotaoRemove>
          </nav>
        </ContainerColor>
    }
  }
  return (
    <header>
        {variacoesHeader()}
    </header>
  )
}

export default Header

