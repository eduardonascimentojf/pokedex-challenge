import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

import pokemonReducer from "./slices/pokemonSlice";
import urlReducer from "./slices/urlSlice";

const store = configureStore({
     reducer: {
          pokemon: pokemonReducer,
          apiUrl: urlReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
               immutableCheck: false,
               serializableCheck: false,
          }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
