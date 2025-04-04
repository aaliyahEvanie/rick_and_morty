import { z} from 'zod'

const CharacterStatusEnum = z.enum(['Alive', 'Dead', 'unknown']);
type CharacterStatusEnum = z.infer<typeof CharacterStatusEnum>;

const CharacterGenderEnum = z.enum(['Female', 'Male', 'Genderless', 'unknown']);
type CharacterGenderEnum = z.infer<typeof CharacterGenderEnum>;

const CharacterSchema = z.object({
    id: z.number(),
    name: z.string(),
    status:  CharacterStatusEnum,
    species: z.string(),
    type: z.string(),
    gender: CharacterGenderEnum,
    origin: z.object({
        name: z.string(), 
        url: z.string()
    }),
    location: z.object({
        name: z.string(), 
        url: z.string()
    }),
    episode: z.array(z.string()), //urls of episodes
    url: z.string(), //details
    created: z.string().datetime()
  })

export type Character = z.infer<typeof CharacterSchema>

const CharacterCallInfoSchema = z.object({
    count: z.number(), 
    next: z.string(), 
    pages: z.number(), 
    prev: z.string()
})

export type CharacterCallInfo = z.infer<typeof CharacterCallInfoSchema>

export const CharacterListSchema = z.object({
    info: CharacterCallInfoSchema,
    characters: z.array(CharacterSchema)
})

export type CharacterList = z.infer<typeof CharacterListSchema>