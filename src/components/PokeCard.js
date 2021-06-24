import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export function PokeCard() {
  return (
    <div>
      <div>{mockPokemonData.name}</div>
      <div>{mockPokemonData.sprites.front_default}</div>
      <div>{mockPokemonData.sprites.front_shiny}</div>
      <div>{mockPokemonData.video}</div>
    </div>
  );
}
