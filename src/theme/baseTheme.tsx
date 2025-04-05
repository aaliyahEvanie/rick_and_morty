import { extendTheme } from "@chakra-ui/react";
import { LandingPageTheme } from "../pages/LandingPage/landingPageTheme";
import { buttonTheme } from "./button";
import { NavbarComponentTheme } from "@/components/NavbarComponent/navbarComponentTheme";
import { CharactersPageTheme } from "@/pages/CharactersPage/charactersPageTheme";

import { modalTheme } from "./modal";
import { cardTheme } from "./cardTheme";
import { badgeTheme } from "./badgeTheme";

export const baseTheme = extendTheme({
    styles: {
        global: {
            body: {
                h: '100vh',
               
                bgGradient:
                    `linear(to-tr, black, gray.800),
                    linear(to-t, gray.900, gray.300),
                    linear(to-b, black, gray.50)`,
                color: 'white',
                backgroundSize: '100% 1000vh',
                backgroundRepeat: 'repeat-y'
            }
        }
    },
    colors: {
       brand: {
        rmGreen: {
            base: '#7FC249',
            light: '#7fc249b3',
        },
        rmBlue: '#93D6CF',
        rmYellow: '#CFE155',
        rmDarkGreen: '#004100'
       }
    },
    components: {
        LandingPageTheme,
        NavbarComponentTheme,
        CharactersPageTheme,
        Badge: badgeTheme,
        Button: buttonTheme,
        Card: cardTheme,
        Modal: modalTheme
    }
})

