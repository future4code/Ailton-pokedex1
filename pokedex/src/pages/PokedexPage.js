import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import { irParaDetalhes, irParaHome } from '../routes/coordinator'

export default function Pokedex() {
    const navigate = useNavigate()

  return (
    <div>
      <Header
         currentPage={"pokedex"}
      />
      <div>DETS</div>
        {/* <p>pokedex</p>
        <button onClick={()=>irParaDetalhes(navigate)}>Pagina de detalhes</button>
        <button onClick={()=>irParaHome(navigate)}>Home</button> */}

    </div>
  )
}
