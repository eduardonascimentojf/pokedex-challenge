import { IUrl } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState = "/pokemon?offset=0&limit=20";
const url = createSlice({
     name: "url",
     initialState: {
          url: initialState,
     },
     reducers: {
          setUrl(state, value) {
               state.url = value.payload;
          },
     },
});
export const { setUrl } = url.actions;
export default url.reducer;
