import axios from "axios";
import { GetPokemonDetails } from "./getPokemonDetails";
import { PokemonDetail } from "./interfaces/PokemonDetails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

interface ListPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[];
}

export async function listPokemon(): Promise<ListPokemonsInterface> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

  const response = await axios.get<ListPokemonsInterface>(endpoint);

  const promisseArr = response.data.results.map(({ name }) => {
    return GetPokemonDetails(name);
  })
  const resultsPromise = await Promise.all(promisseArr)


  return {
    ...response.data,
    results: resultsPromise
  };
}