import React, { useContext, useEffect, useState } from 'react';
import { PokemonDetail } from './services/interfaces/PokemonDetails';

import { Container, Box, Grid, AppBar, IconButton, Button, Toolbar, Typography, Card, CardActions, CardContent, Badge  } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { GetPokemonDetails } from './services/getPokemonDetails';
import { useQuery } from 'react-query';
import { Favorite } from '@mui/icons-material';
import { FavoriteContext } from '../favorites/context/FavoriteContext';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {

  const { favorites, setFavorites } = useContext(FavoriteContext)

  const { name } = useParams() as {
    name: string;
  }
  const navigate = useNavigate();

  const { data } = useQuery(`getPokemonDetails-${name}`, () => GetPokemonDetails(name));

  const selectedPokemonDetails = data;

  const addPokemonToFavorite = () => {
    if (!selectedPokemonDetails) return;
    setFavorites([...favorites, selectedPokemonDetails]);
  }

  const removePokemonFromFavorites = () => {
    if (!selectedPokemonDetails) return;
    setFavorites(favorites.filter((poke) => poke.name !== selectedPokemonDetails.name));
  }

  const isFavorite = favorites.some((poke) => poke.name === selectedPokemonDetails?.name)

  return (
    <div>
      <Container sx={{ mt: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant='outlined' onClick={() => navigate(-1)}>
          Favoritos
        </Button>
          <Typography variant="h6">
            {selectedPokemonDetails?.name}
          </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'flex' } }}>
        <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite() } aria-label="add to favorites">
              <Favorite color={isFavorite ? `error` : `disabled`} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>


    <Container maxWidth="lg">
      <Box mt={2}>
          <img width='100%' height='auto' src={selectedPokemonDetails?.sprites.front_default} alt="" />
      </Box>
        <Box display='flex' flex-direction='row'>
          <Typography variant='h2'>
          {selectedPokemonDetails?.name}
          </Typography>
        </Box>

        {/* <Box display='flex' flex-direction='row'>
          <Typography>
            Tipo:
          </Typography>
          <Typography>
          {selectedPokemonDetails?.types.map((type) => <Typography>{type.type.name}</Typography>)}
          </Typography>
        </Box> */}

        <Box display='flex' flex-direction='row'>
          <Typography>
            Espécie:
          </Typography>
          <Typography>
          {selectedPokemonDetails?.species.name}
          </Typography>
        </Box>

        <Box display='flex' flex-direction='row'>
          <Typography>
            Altura:
          </Typography>
          <Typography>
          {selectedPokemonDetails?.height}
          </Typography>
        </Box>

        <Box display='flex' flex-direction='row'>
          <Typography>
            Peso:
          </Typography>
          <Typography>
          {selectedPokemonDetails?.weight}
          </Typography>
        </Box>

        <Box display='flex' flex-direction='row'>
          <Typography>
          {selectedPokemonDetails?.abilities.map(ability => <Typography>{ability.ability.name}</Typography>)}
          </Typography>
        </Box>


        
    
    </Container>

    
      
      {/* <h2>Pokemon Selecionado: {selectedPokemon?.name || "Nenhum Pokemon selecionado"}</h2> */}
      {/* {JSON.stringify(selectedPokemonDetails, undefined, 2)} */}
    </div>
  );
};

export default PokemonDetails;

function useHistory(): {} {
  throw new Error('Function not implemented.');
}
