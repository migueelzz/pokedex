import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './services/interfaces/PokemonDetails';

import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Grid, AppBar, IconButton, Button, Toolbar, Typography, Card, CardActions, CardContent  } from '@mui/material';
import { useParams } from 'react-router-dom';
import { GetPokemonDetails } from './services/getPokemonDetails';

interface PokemonDetailsProps {
  
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

  useEffect(() => {
    if(!name) return;
  
    GetPokemonDetails(name)
    .then((response) => setSelectedPokemonDetails(response))
  
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
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <img src={selectedPokemonDetails?.sprites.front_default} alt="" />
    
      
      {/* <h2>Pokemon Selecionado: {selectedPokemon?.name || "Nenhum Pokemon selecionado"}</h2> */}
      {JSON.stringify(selectedPokemonDetails, undefined, 2)}
    </div>
  );
};

export default PokemonDetails;