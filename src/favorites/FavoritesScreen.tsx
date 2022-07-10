import React, { useContext } from 'react';
import axios from 'axios';
import { GetPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetails';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemons';

import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Grid, AppBar, IconButton, Button, Toolbar, Typography, Card, CardActions, CardContent, CircularProgress, LinearProgress, Badge  } from '@mui/material';

import { useNavigate } from "react-router-dom";

import { useQuery } from 'react-query';
import { Favorite, More } from '@mui/icons-material';
import { FavoriteContext } from '../favorites/context/FavoriteContext';
import PokedexCard from '../pokedex/components/PokedexCard';

interface FavoriteScreenProps {
  
}

export const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {
  const { favorites } = useContext(FavoriteContext);
  
  const navigate = useNavigate();


  return (
    <div>
      <Container sx={{ mt: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            FavoriteScreen
          </Typography>
        </Toolbar>
      </AppBar>
      </Container>

    <Container>
      <div style={{ marginTop: `1em` }}>
        <Grid container spacing={2}>
          {favorites.map((pokemon) => (
            <Grid item xs={6} lg={3} key={pokemon.name}>
              <PokedexCard pokemon={pokemon}/>
            </Grid>
            ))}
          </Grid>
      </div>
    </Container>

      
    </div>
  );
};