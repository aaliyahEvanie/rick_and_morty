import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['wrapper', 'innerWrapper', 'btnPosition'])

export const LandingPageTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        wrapper: {
            display: 'flex', 
            justifyContent: 'center'
        }, 
        innerWrapper: {
            position: 'relative'
        },
        btnPosition: {
            position: 'absolute',
            top: '50%',
            left: '30%', 
        }
    }
})