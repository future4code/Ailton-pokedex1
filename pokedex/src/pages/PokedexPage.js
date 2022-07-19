import React from 'react'
import {useNavigate} from 'react-router-dom'
import { irParaDetalhes, irParaHome } from '../routes/coordinator'

export default function Pokedex() {
    const navigate = useNavigate()

  return (
    <div>
        <p>pokedex</p>
        <button onClick={()=>irParaDetalhes(navigate)}>Pagina de detalhes</button>
        <button onClick={()=>irParaHome(navigate)}>Home</button>

    </div>
  )
}
