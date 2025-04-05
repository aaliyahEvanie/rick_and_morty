import { z} from 'zod'

export const CharacterStatusEnum = z.enum(['Alive', 'Dead', 'unknown']);
export type CharacterStatus = z.infer<typeof CharacterStatusEnum>;

export const CharacterGenderEnum = z.enum(['Female', 'Male', 'Genderless', 'unknown']);
export type CharacterGender = z.infer<typeof CharacterGenderEnum>;

export const CharacterSchema = z.object({
    id: z.number(),
    name: z.string(),
    status:  CharacterStatusEnum,
    species: z.string(),
    type: z.string(),
    gender: CharacterGenderEnum,
    image: z.string(),
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
    next: z.string().nullable(), 
    pages: z.number(), 
    prev: z.string().nullable()
})

export type CharacterCallInfo = z.infer<typeof CharacterCallInfoSchema>

export const CharacterListSchema = z.object({
    info: CharacterCallInfoSchema,
    characters: z.array(CharacterSchema)
})

export type CharacterList = z.infer<typeof CharacterListSchema>


export const CharacterStatusColorScheme = new Map<string, string>([
    ['Alive', 'green'], 
    ['Dead', 'red'], 
    ['unknown', 'purple']]
)