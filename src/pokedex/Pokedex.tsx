import React, { useContext } from 'react';
import axios from 'axios';
import { GetPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetails';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemons';

import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Grid, AppBar, IconButton, Button, Toolbar, Typography, Card, CardActions, CardContent, CircularProgress, LinearProgress, Badge  } from '@mui/material';

import { useNavigate } from "react-router-dom";
import PokedexCard from './components/PokedexCard';
import { useQuery } from 'react-query';
import { Favorite, More } from '@mui/icons-material';
import { FavoriteContext } from '../favorites/context/FavoriteContext';

interface PokedexProps {
  
}

export const Pokedex: React.FC<PokedexProps> = () => {
  const { favorites } = useContext(FavoriteContext);
  
  const navigate = useNavigate();
  const { data, isLoading, isRefetching, refetch, isStale } = useQuery(`listPokemon`, listPokemon);

  const favoritesCount = favorites.length;

  return (
    <div>
      <Container sx={{ mt: 1 }}>
      <AppBar position="static" color="primary">
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
            Pokedex
          </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={() => navigate('/favorites')}
              color="inherit"
            >
          <Badge badgeContent={favoritesCount} color="error">
              <Favorite />
          </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      </Container>
      
        {isRefetching && <LinearProgress color='secondary' />}

    <Container>
      <Box mt={4}>
        {isStale && (
          <Button sx={{ mb: 3}} disabled={isRefetching} variant='outlined' onClick={() => refetch()}>Atualizar</Button>
        )}
        {!isLoading ? (
          <>
          <Grid container spacing={2}>
        {data?.results.map((pokemon) => (
          <Grid item xs={6} lg={3}>
            <PokedexCard pokemon={pokemon}/>
          </Grid>
          ))}
        </Grid>
        </>
        ) : (
          <div><CircularProgress /></div>
        )}

      </Box>
    </Container>

      
    </div>
  );
};