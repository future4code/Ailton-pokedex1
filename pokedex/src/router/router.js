import Home from "../pages/Home";
import PaginaDetalhes from "../pages/PaginaDetalhes";
import Pokedex from "../pages/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route index element = {<Home/>}/>
         <Route path='detalhes' element = {<PaginaDetalhes/>}/>
         <Route path='pokedex' element = {<Pokedex/>}/>
      </Routes>
      </BrowserRouter>
     
     </div>
  )
}
