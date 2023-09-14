import { Pokemon } from "../../models/pokemon";

export interface PokemonGateway {
  getRandom(): Promise<Pokemon>;
}
