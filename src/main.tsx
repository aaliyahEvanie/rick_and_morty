import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import {  ChakraProvider } from '@chakra-ui/react'
import { baseTheme } from './theme/baseTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={baseTheme}>
      <App />
    </ChakraProvider>
)
