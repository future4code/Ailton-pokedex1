import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PokeDetail from "../pages/PokeDetail";
import Pokedex from "../pages/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/pokedex"} element={<Pokedex />} />
        <Route path={"/detalhes/:nome"} element={<PokeDetail />} /> 
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
