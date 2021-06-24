import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export function PokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>
      <img src={mockPokemonData.sprites.front_default} alt="" />
      <br />
      <img src={mockPokemonData.sprites.front_shiny} alt="" />
      <br />
      <a href={mockPokemonData.video}>link</a>
      <br />
    </div>
  );
}
