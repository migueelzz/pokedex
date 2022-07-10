import { ExpandMore, Favorite } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { FavoriteContext } from '../../favorites/context/FavoriteContext';
import { PokemonDetail } from '../../pokemon/services/interfaces/PokemonDetails';
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

// const Card = styled.h1`
//   padding: 4rem;
//   border-radius: .5em;
//   background: papayawhip;
// `;

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const { setFavorites, favorites } = useContext(FavoriteContext);

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  const addPokemonToFavorite = () => {
    setFavorites([...favorites, pokemon]);
  }

  const removePokemonFromFavorites = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  }

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name)
  
  return (
    <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            component="img"
            height="200"
            image={pokemon.sprites.front_default}
            alt="pokemon"
            onClick={handleClick}
          />
          <CardHeader 
            title={pokemon.name}
            subheader={pokemon.types.map((type) => <Chip label={type.type.name} variant="outlined" />)}
          />

        <CardActions disableSpacing>
            <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite() } aria-label="add to favorites">
              <Favorite color={isFavorite ? `error` : `disabled`} />
            </IconButton>
        </CardActions>
    </Card>
  );
};

export default PokedexCard;