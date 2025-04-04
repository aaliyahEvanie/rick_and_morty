import { getCharacterList } from "@/client/CharacterClient"
import { CharacterCallInfo, CharacterList } from "@/types/character"
import { Box, Button, useMultiStyleConfig } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const CharactersPage = () => {
    const styles = useMultiStyleConfig('CharactersPageTheme', {})
    const [characters, setCharacters] = useState<CharacterList|null>(null)
    const [pagination, setPagination] = useState<CharacterCallInfo>()
    useEffect(()=> {
        if(!characters){
            getCharacterList({url:null}).then(data => {
                setCharacters(data)
                setPagination(data?.info)
            })
            
        }
    },[])

    return (
        <Box __css={styles}>
            <Box> Filter Bar</Box>
            <Box>
                <Button>Previous</Button>
                    {characters?.characters.map((character, index)=> {
                        return (
                            <Box key={index}>{character.name}</Box>
                        )
                    })}
                <Button>Next</Button>
            </Box>
        </Box>
    )
}