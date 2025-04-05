import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['cardWrapper', 'paginationWrapper'])

export const CharactersPageTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        paginationWrapper: {
            display: 'flex'
        },
        cardWrapper: {

        }
    }
})