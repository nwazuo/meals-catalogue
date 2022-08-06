import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const colors = {
  brand: {
    50: '#eae9ff',
    100: '#c2bff7',
    200: '#9994ec',
    300: '#7169e3',
    400: '#493eda',
    500: '#3024c0',
    600: '#241c96',
    700: '#19146c',
    800: '#0e0b43',
    900: '#05031b',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
