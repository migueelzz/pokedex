import { ExpandMore, Favorite } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
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

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }
  
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
          <CardMedia
            component="img"
            height="200"
            image={pokemon.sprites.front_default}
            alt="green iguana"
          />
          <CardHeader 
            title={pokemon.name}
            subheader={pokemon.types.map((type) => <Chip label={type.type.name} variant="outlined" />)}
          />

        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
        </CardActions>
    </Card>
  );
};

export default PokedexCard;