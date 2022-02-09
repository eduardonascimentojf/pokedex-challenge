import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { GlobalStyle } from './styles/global';

import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
