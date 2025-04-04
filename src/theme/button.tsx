import { defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
  defaultProps: {

  },
  variants: {
    ghost: {
        bg: 'brand.rmGreen.light',
        color: 'white'
        //active state
    },
    navItem: {
      bg: 'brand.rmGreen.light',
      color: 'white'
    }
  }
})