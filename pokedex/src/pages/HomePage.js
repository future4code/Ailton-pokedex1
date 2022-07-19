import React from 'react'
// import { irParaDetalhes, irParaPokedex } from '../routes/coordinator'
// import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
// import CardPoke from '../components/CardPoke'
import styled from 'styled-components';

const CardArea = styled.div`
  position: relative;
  width: 1440px;
  height: 2455px;
  background-color: #5E5E5E;
`
const Title = styled.div`
  position: absolute;
  width: 420px;
  height: 72px;
  left: 40px;
  top: 220px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */

  color: #FFFFFF;
`

export default function HomePage() {
    // const navigate = useNavigate()

  return (
    <div>
      <Header
        currentPage={"home"}
      />
      <main>
        <h1>Todos Pokémons</h1>
        {/* <CardPoke /> */}
      </main>
        {/* <button onClick={()=>irParaPokedex(navigate)}>Pokedex</button>
        <button onClick={()=>irParaDetalhes(navigate)}>Pagina de detalhes</button> */}
    </div>
  )
}
