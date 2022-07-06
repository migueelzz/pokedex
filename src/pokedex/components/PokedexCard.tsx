import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

const Card = styled.h1`
  padding: 4rem;
  border-radius: .5em;
  background: papayawhip;
`;

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }
  
  return (
    <>
    <Card onClick={handleClick}>
      {pokemon.name}
    </Card>
    </>
  );
};

export default PokedexCard;