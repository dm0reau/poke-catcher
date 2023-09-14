import { expect, it } from "bun:test";
import { discoverPokemon } from "./discover-pokemon.use-case";

it("discovers a pokemon", async () => {
  const pokemon = await discoverPokemon();

  expect(pokemon).toEqual({
    number: 25,
    name: "Pikachu",
  });
});
