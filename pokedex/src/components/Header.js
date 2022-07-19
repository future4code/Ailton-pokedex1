import React from 'react'
import styled from 'styled-components';
import pokelogo from "../assets/pokelogo.png"

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

// const BotaoPokedex = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 4px 10px;
//   position: absolute;
//   width: 287px;
//   height: 74px;
//   left: 1112px;
//   top: 41px;
//   background: #33A4F5;
//   border-radius: 8px;
//   border-style: none;
// `

// const NomeBotao = styled.p`
//   width: 106px;
//   height: 36px;

//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 36px;
//   /* identical to box height */

//   color: #FFFFFF;


//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `

const Header = () => {
  return (
    <ContainerColor>
        <Logo />
    </ContainerColor>
  )
}

export default Header

