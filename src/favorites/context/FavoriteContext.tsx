import React, { useState } from 'react';
import { PokemonDetail } from '../../pokemon/services/interfaces/PokemonDetails';

interface FavoriteContextProps {
  favorites: PokemonDetail[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>;
}

interface IProps {
  children: React.ReactNode;
}

const INITIAL_FAVORITES_VALUE: PokemonDetail[] = [];

// create context
export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => console.warn(`setFavorites is not ready`)
});

export const FavoriteProvider: React.FC<IProps> = ({ children }) => {
  
  const [favorites, setFavorites] = useState<PokemonDetail[]>(INITIAL_FAVORITES_VALUE);

  return (
    <FavoriteContext.Provider value={{
      favorites,
      setFavorites,
    }}>
      {children}
    </FavoriteContext.Provider>
  );
};