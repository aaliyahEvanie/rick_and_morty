import { getCharacterList, getCharacterDetails } from "@/client/CharacterClient"
import { Character, CharacterCallInfo, CharacterGenderEnum, CharacterList, CharacterStatusEnum } from "@/types/character"
import { Box, Button, Card, CardFooter, CardHeader, useMultiStyleConfig, Image, Select, Input, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { DetailModalComponent } from "@/components/DetailModal/DetailModalComponent"


/**
 * [x] Pagination 
 * [] Detail view
 * [] Filters
 * [] Designs
 */

export const CharactersPage = () => {
    const styles = useMultiStyleConfig('CharactersPageTheme', {})
    const [characters, setCharacters] = useState<CharacterList|null>(null)
    const [character, setCharacter] = useState<Character|null>(null)
    const [pagination, setPagination] = useState<CharacterCallInfo>()
    const { isOpen, onOpen, onClose } = useDisclosure()

    
    const genderOptions = Object.values(CharacterGenderEnum)[1].values as Array<string>
    const statusOptions = Object.values(CharacterStatusEnum)[1].values as Array<string>

    

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
            onOpen()
        })
    },[])

    const onPagnination = (e) => {
        e.preventDefault();
        const pageUrl = e.target.value
        if(pageUrl){
            getCharacterList({url: pageUrl}).then(data =>{
                setCharacters(data)
                setPagination(data?.info)
            })
        }
    }

    return (
        <Box __css={styles} mx={8} >
            <Box display='flex' paddingX={4} paddingY={8}>
                <Box>
                    <Input placeholder="name" />
                </Box>
                <Select>
                    {genderOptions.map((key: string) => 
                        <option key={key} value={key}>{key}</option>
                    )}
                </Select>
                <Box>
                    <Input placeholder="species" />
                </Box>
                <Box> 
                   <Input placeholder="type" />
                </Box>
                <Box>
                    <Select>
                    {statusOptions.map((key: string) => 
                        <option key={key} value={key}>{key}</option>
                    )}
                    </Select>
                </Box>
            </Box>
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
                <DetailModalComponent isOpen={isOpen} onClose={onClose} character={character}/>
                </Box>
            <Box __css={styles.paginationWrapper}>
                <Button variant='pagination' 
                        disabled={!pagination?.prev}
                        value={pagination?.prev|| ''}
                        onClick={onPagnination}>
                        <ChevronLeftIcon/> Previous
                </Button>
                <Button variant='pagination' 
                        value={pagination?.next || ''}
                        onClick={onPagnination}>
                            Next<ChevronRightIcon/>
                </Button>
            </Box>

        </Box>
    )
}