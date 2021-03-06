import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { dark, ligth } from "./styles/Theme";
import store, { RootState } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
     <React.StrictMode>
          <Provider store={store}>
               <ThemeProvider theme={dark}>
                    <GlobalStyle />
                    <App />
               </ThemeProvider>
          </Provider>
     </React.StrictMode>,
     document.getElementById("root")
);
