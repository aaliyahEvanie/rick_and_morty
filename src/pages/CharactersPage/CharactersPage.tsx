import { getCharacterList } from "@/client/CharacterClient"
import { CharacterCallInfo, CharacterList } from "@/types/character"
import { Box, Button, Card, useMultiStyleConfig } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


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
            <Box __css={styles.paginationWrapper}>
                <Button variant='pagination'><ChevronLeftIcon/> Previous</Button>
                <Box __css={styles.cardWrapper}>
                    {characters?.characters.map((character, index)=> {
                        return (
                            <Card key={index}>{character.name}</Card>
                        )
                    })}
                </Box>
                <Button variant='pagination'>Next<ChevronRightIcon/></Button>
            </Box>
        </Box>
    )
}