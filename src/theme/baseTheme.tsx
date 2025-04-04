import { extendTheme } from "@chakra-ui/react";

export const baseTheme = extendTheme({
    styles: {
        global: {
            body: {
                h: '100vh',
                backgroundSize: 'cover',
                bgGradient:
                    `linear(to-tr, black, gray.800),
                    linear(to-t, gray.900, gray.300),
                    linear(to-b, black, gray.50)`
                  
            }
        }
    },
    colors: {
       brand: {
        rmGreen: '#7FC249',
        rmBlue: '#93D6CF',
        rmYellow: '#CFE155',
        rmDarkGreen: '#004100'
       }
    }
})

