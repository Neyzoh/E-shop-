import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const colors = {
  brand: {
    1: "#000",
    2: "#000"
  }
}

const fonts = {
  body: 'Montserrat',
  heading: 'Roboto'
}

const theme = extendTheme({colors, fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
