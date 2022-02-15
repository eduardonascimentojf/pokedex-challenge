import { IPokemonModal } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";
type PokemonState = IPokemonModal[];
const initialState: PokemonState = [];
const stock = createSlice({
     name: "stoke",
     initialState: {
          data: initialState,
     },
     reducers: {
          setPokemon(state, value) {
               state.data = value.payload;
          },
     },
});
export const { setPokemon } = stock.actions;
export default stock.reducer;
