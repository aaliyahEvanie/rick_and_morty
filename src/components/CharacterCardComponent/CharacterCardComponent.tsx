import { Character } from "@/types/character"
import { Card, CardHeader } from "@chakra-ui/react"

type CharacterCardComponentProps = {
    character: Character, 
    onOpen: () => {}
}

export const CharacterCardComponent = (character: Character) => {
    return (
        <Card>
            <CardHeader>
                {character.name}
            </CardHeader>
        </Card>
    )
}