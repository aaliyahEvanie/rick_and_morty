import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import {  ChakraProvider } from '@chakra-ui/react'
import { baseTheme } from './theme/baseTheme.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={baseTheme}>
        <App />
      </ChakraProvider>
  </StrictMode>
)
