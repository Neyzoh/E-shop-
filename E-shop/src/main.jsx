import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import '../src/style.css'

const colors = {
  brand: {
    1: "#000",
    2: "#000",
    mybackground: "#EBEBEB" 
  }
}

const fonts = {
  body: 'Montserrat, sans-serif',
  heading: 'Roboto, sans-serif'
}

const theme = extendTheme({colors, fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
);
