import { getCharacterList, getCharacterDetails } from "@/client/CharacterClient"
import { Character, CharacterCallInfo, CharacterList } from "@/types/character"
import { Box, Button, Card, CardFooter, CardHeader, useMultiStyleConfig, Image } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'


export const CharactersPage = () => {
    const styles = useMultiStyleConfig('CharactersPageTheme', {})
    const [characters, setCharacters] = useState<CharacterList|null>(null)
    const [character, setCharacter] = useState<Character|null>(null)
    const [pagination, setPagination] = useState<CharacterCallInfo>()

    useEffect(()=> {
        if(!characters){
            getCharacterList({url:null}).then(data => {
                setCharacters(data)
                setPagination(data?.info)
            })
            
        }
    },[])

    const onGetDetails = useCallback((detailsUrl: string) => {
        getCharacterDetails({url: detailsUrl}).then(data =>{
            setCharacter(data)
        })
    },[])

    return (
        <Box __css={styles} mx={8} background='red'>
            <Box> Filter Bar</Box>
            <Box __css={styles.cardWrapper} 
                        paddingX={12}
                        display='grid' 
                        gridTemplateColumns='repeat(auto-fill, 200px)' 
                        rowGap={4} columnGap={4}>
                    {characters?.characters.map((character, index)=> {
                        return (
                            <Card key={index} borderRadius='12px' padding={4} onClick={() => {onGetDetails(character.url)}}>
                                <CardHeader>{character.name}</CardHeader>
                                <CardFooter>
                                
                                </CardFooter>
                                <Image src={character.image}/>
                            </Card>
                        )
                    })}
                </Box>
            <Box __css={styles.paginationWrapper}>
                <Button variant='pagination'><ChevronLeftIcon/> Previous</Button>
                <Button variant='pagination'>Next<ChevronRightIcon/></Button>
            </Box>

        </Box>
    )
}