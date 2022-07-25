import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import { goToHomePage } from '../routes/coordinator'
import styled from 'styled-components'

const PokeContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const PokeDetail = () => {

  const navigate = useNavigate()

  const params = useParams()

  const pokemon = useRequestData(`${BASE_URL}/${params.nome}`,
  {}
  )

  return (
  <PokeContainer>
    <div>
    {pokemon.order && <p>#{pokemon.order}</p>}
    {pokemon.name && <h1>{pokemon.name}</h1>}
    </div>
    {pokemon.sprites && pokemon.sprites.other["official-artwork"] && pokemon.sprites.other["official-artwork"].front_default && (<img alt='foto' src={pokemon.sprites.other["official-artwork"].front_default} width={100} height={100} />)}
    {pokemon.sprites && pokemon.sprites.front_default && (<img src={pokemon.sprites.front_default} />)}
    {pokemon.sprites && pokemon.sprites.back_default && (<img src={pokemon.sprites.back_default} />)}
    <button onClick={() => goToHomePage(navigate)}>Voltar para lista</button>
  </PokeContainer>
  )
}

export default PokeDetail