import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GetPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { PokemonDetail } from '../pokemon/services/interfaces/PokemonDetails';
import { listPokemon, PokemonListInterface } from '../pokemon/services/listPokemons';

import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Grid, AppBar, IconButton, Button, Toolbar, Typography, Card, CardActions, CardContent  } from '@mui/material';

import { useNavigate } from "react-router-dom";
import PokedexCard from './components/PokedexCard';

interface PokedexProps {
  
}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);


  useEffect(() => {
    listPokemon().then((response) => setPokemons(response.results))
  }, []);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Container maxWidth="lg">
      <Box mt={4}>
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <>
            <Grid item xs={6} lg={3}>
              <PokedexCard pokemon={pokemon}/>
            </Grid>
            </>
          ))}
        </Grid>

      </Box>
    </Container>

      
    </div>
  );
};