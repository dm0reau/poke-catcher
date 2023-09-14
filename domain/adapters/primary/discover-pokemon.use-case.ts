import { Pokemon } from "../../models/pokemon";
import { PokemonGateway } from "../../ports/secondary/pokemon.gateway";
import { PokemonGatewayInMemory } from "../secondary/pokemon.gateway.in-memory";

export async function discoverPokemon(): Promise<Pokemon> {
  const pokemonGateway: PokemonGateway = new PokemonGatewayInMemory();

  return pokemonGateway.getRandom();
}
