import {z} from 'zod'
import { useEffect, useState } from "react"
import { apiUrl } from '../const'
import { CharacterList, CharacterListSchema } from '../types/character'

const characterUrl = apiUrl + '/character'

/**
 * FILTERS
 * name, status, species, type, gender 
 * eg. /?name=rick&status=alive
 */

/**
 * GET all characters
 * https://rickandmortyapi.com/api/character
 */
type CharacterSearchProps = {
    url: string | null,
}

export const getCharacterList = async ({url = null}: CharacterSearchProps): Promise<CharacterList | null> => {
    const apiCall = url ? url : characterUrl
    let data: CharacterList | null = null
    try {
         const data = await fetch(apiCall)
                               .then((response) =>  response.json())
         const extractedData = {
            info: data.info, 
            characters: data.results 
        }
        return  CharacterListSchema.parse(extractedData)
    } catch(error){
        if(error instanceof z.ZodError){
            console.error("Validation failed: ", error.issues[0])
        } else {
            console.error("Unexpected error: ", error)
        }
    }   
    return data
    
}
/**
 * GET a character / a batch of characters
 * https://rickandmortyapi.com/api/character/{id} || https://rickandmortyapi.com/api/character/[{id}, {id}]
 */
export const CharacterDetail = () => {
    useEffect(()=> {

    })
}
