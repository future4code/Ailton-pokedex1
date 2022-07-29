import React from 'react'
import Header from '../components/Header'
import CardPoke from '../components/CardPoke'
import styled from 'styled-components';
import useRequestData from '../hook/useRequestData';

const AreaDaPagina = styled.div`
  position: relative;
  background-color: background: #DDDDDD;
  width: 1440px;
  height: 2455px;
`

const CardArea = styled.div`
  width: 1440px;
  height: 2295px;
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

  const [pokeList] = useRequestData("pokemon?limit=20&offset=0", [])

  const getPokeList = pokeList[0] ? pokeList.map((poke) => {
    return (
      <CardPoke
        key={poke.id}
        poke={poke}
      />
    )
  }) : <p>Carregando...</p>

  return (
    <AreaDaPagina>
      <Header
        currentPage={"home"}
      />
      <CardArea>
        <Title>Todos Pokémons</Title>
        {getPokeList}
      </CardArea>
 
    </AreaDaPagina>
  )
}
