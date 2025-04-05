import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: '12px',
    backgroundColor: 'gray.200',
    filter:  `drop-shadow(var(--chakra-colors-brand-rmDarkGreen) 8px 7px 10px)`,
    padding: 0
  },
  header: {
    padding: '0 0 4px 8px',
    
    fontWeight:  600
  },
  body: {
    
  },
  footer: {
    
  },
})

const sizes = {}

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })