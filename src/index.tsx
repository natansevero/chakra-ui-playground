import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const customTheme = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    }
  },
  styles: {
    global: {
      "html, body": {
        color: "tomato",
      },
      a: {
        color: "teal.500",
      },
    },
  },
}

const theme = extendTheme(customTheme)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
