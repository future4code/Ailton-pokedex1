import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToHomePage, goToPokeDetail } from '../routes/coordinator'

export default function Pokedex() {
    const navigate = useNavigate()

  return (
    <div>
        <p>Pokedex</p>
        <button onClick={()=>goToPokeDetail(navigate)}>Pagina de detalhes</button>
        <button onClick={()=>goToHomePage(navigate)}>Home</button>

    </div>
  )
}
