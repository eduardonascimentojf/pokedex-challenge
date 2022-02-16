import { IPokemonModal } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";
type PokemonState = IPokemonModal[];
const initialState: PokemonState = [];
const pokemon = createSlice({
     name: "pokemon",
     initialState: {
          data: initialState,
     },
     reducers: {
          setPokemon(state, value) {
               state.data = value.payload;
          },
          resetPokemon(state) {
               state.data = [];
          },
     },
});
export const { setPokemon, resetPokemon } = pokemon.actions;
export default pokemon.reducer;
