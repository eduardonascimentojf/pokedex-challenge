import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./slices/pokemonSlice";

const store = configureStore({
     reducer: {
          pokemon: pokemonReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
               immutableCheck: false,
               serializableCheck: false,
          }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
