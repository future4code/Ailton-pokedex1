import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import Pokedex from "../pages/PokedexPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route index element ={<HomePage/>}/>
         <Route path={'/pokemon/:pokeName/details'} element = {<DetailsPage/>}/>
         <Route path={'pokedex'} element ={<Pokedex/>}/>
         <Route path='*' element = {<div>Error Page</div>}/>
      </Routes>
      </BrowserRouter>
     
     </div>
  )
}
