import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import { GlobalContext } from '../components/global/GlobalContext'
import { goToPokeDetail } from '../routes/coordinator'
import Header from '../components/Header'
import styled from 'styled-components';

const CardArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5E5E5E;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

const PokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

const Title = styled.div`
  width: 420px;
  height: 72px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: white;
  border: 1px solid white;
`

const Poke = styled.div`
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
    border: 1px solid yellow;
    background-color: white;
    cursor: pointer;
`
export default function HomePage() {
  const navigate =useNavigate()
    // const { pokedex, setPokedex } = useContext(GlobalContext)

    const pokeList = useRequestData(`${BASE_URL}`, {})

//    const addToPokedex = (newPoke) => {
//     const index = pokedex.findIndex((i) => i.name === newPoke.name)

//     const newPokedex = [...pokedex]

//     if (index === -1) {
//         const pokedexItem = {...newPoke, amount: 1}
//         newPokedex.push(pokedexItem)
//     } else {
//         newPokedex[index].amount = newPokedex[index].amount + 1
//     }

//     setPokedex(newPokedex)
//    }

//    console.log(pokedex)

   const renderedPokemons = pokeList.results && pokeList.results.map((poke) => {
    return <Poke onClick={() => goToPokeDetail(navigate, poke.name)} key={poke.name}>{poke.name}</Poke>
   })

  return (
    <div>
      <CardArea>
        <Header />
        <PokeContainer>
          <Title>Todos Pokémons</Title>
          {renderedPokemons}
        </PokeContainer>
      </CardArea>
        {/* <button onClick={()=>irParaPokedex(navigate)}>Pokedex</button>
        <button onClick={()=>irParaDetalhes(navigate)}>Pagina de detalhes</button> */}
    </div>
  )
}
