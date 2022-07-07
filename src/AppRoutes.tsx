import React from 'react';

import { Routes, Route, } from "react-router-dom";
import FavoritesScreen from './favorites/FavoritesScreen';

import { Pokedex } from './pokedex/Pokedex';
import PokemonDetails from './pokemon/PokemonDetails';

interface AppRoutesProps {
  
}

export const AppRoutes: React.FC<AppRoutesProps> = () => {
  return (
    <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
    </Routes>
  );
};

export default AppRoutes;
