import {z} from 'zod'

const EpisodeScheme = z.object({
    id: z.number(), 
    name: z.string(), 
    air_date: z.string().datetime(), 
    episode: z.string(), 
    characters: z.array(z.string()),
    created: z.string().datetime() 
})

export type Episode = z.infer<typeof EpisodeScheme>