import { getCharacterList, getCharacterDetails } from "@/client/CharacterClient"
import { Character, CharacterCallInfo, CharacterGenderEnum, CharacterList, CharacterStatusColorScheme, CharacterStatusEnum } from "@/types/character"
import { Box, Button, Card, CardFooter, CardHeader, useMultiStyleConfig, Image, Select, Input, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Badge, chakra } from "@chakra-ui/react"
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

    const onGetDetails = (e: any, detailsUrl: string) => {
       e.preventDefault()
       getCharacterDetails({url: detailsUrl}).then(data =>{
            setCharacter(data)
            onOpen()
        })
    }

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
        <Box __css={styles} >
            <Box display='flex' paddingX={4} paddingY={8}>
                {/* <Box>
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
                </Box> */}
            </Box>
            <Box __css={styles.cardWrapper} 
                        paddingX={12}
                        display='grid' 
                        gridTemplateColumns='repeat(auto-fill, 200px)' 
                        rowGap={4} columnGap={8}>
                    {characters?.characters.map((character, index)=> {
                        return (
                        <Card  key={index} direction={{ base: 'column' }} overflow='hidden' 
                               onClick={(event)=> onGetDetails(event, character.url)}>
                                <CardHeader>
                               
                                <chakra.h3>{character.name}</chakra.h3>
                                
                                    
                                </CardHeader>
                                <Box ml={2}>
                                    <Box><chakra.span fontWeight='medium'>Gender:</chakra.span> {character.gender}</Box>
                                    <Box><chakra.span fontWeight='medium'>Origin:</chakra.span> {character.origin.name}</Box>
                                    <Box><chakra.span fontWeight='medium'>Species: {character.species}</chakra.span></Box>
                                </Box>
                                
                                <Image
                                    objectFit='cover'
                                    height='-webkit-fill-available'
                                    position='relative'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={character.image}
                                    alt={character.name}/>
                                <Box position='absolute' bottom={0} width='100%'>
                                    <Badge colorScheme={CharacterStatusColorScheme.get(character.status)}>{character.status}</Badge>
                                </Box>
                                
                             
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