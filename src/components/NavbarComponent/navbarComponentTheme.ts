import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['lgHeaderBar', 'navbar'])

export const NavbarComponentTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        lgHeaderBar: {
            height:'80px',
            position: 'sticky',
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