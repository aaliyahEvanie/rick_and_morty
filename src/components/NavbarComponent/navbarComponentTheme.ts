import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['lgHeaderBar', 'navbar'])

export const NavbarComponentTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        lgHeaderBar: {
            height:'80px',
            position: "sticky",
            top: 0,
            zIndex: 1, 
            mb: 14,
            bgGradient:`linear(to-tr, black, gray.800)`,
            img: {
                height: '100px'
            }
        },
        navbar: {
            display: 'flex',
            alignItems: 'center',
            button: {
             mx: 4   
            }
        }
    }
})