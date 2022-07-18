import React from 'react'
import { irParaDetalhes, irParaPokedex } from '../router/coordinator'
import {useNavigate} from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()

  return (
    <div>
        <p>Home</p>  
        <button onClick={()=>irParaPokedex(navigate)}>Pokedex</button>
        <button onClick={()=>irParaDetalhes(navigate)}>Pagina de detalhes</button>
    </div>
  )
}
