import { PokemonGateway } from "../../ports/secondary/pokemon.gateway";
import { Pokemon } from "../../models/pokemon";

export class PokemonGatewayInMemory implements PokemonGateway {
  async getRandom(): Promise<Pokemon> {
    return {
      number: 25,
      name: "Pikachu",
    };
  }
}
