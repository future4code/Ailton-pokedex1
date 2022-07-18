import React from 'react'
import {useNavigate} from 'react-router-dom'
import { irParaHome, irParaPokedex } from '../router/coordinator'

export default function PaginaDetalhes() {
    const navigate = useNavigate()

  return (
    <div>
        <p>PaginaDetalhes</p>
        <button onClick={()=>irParaHome(navigate)}>Home</button>
        <button onClick={()=>irParaPokedex(navigate)}>Pokedex</button>
    </div>
  )
}
