import { Character } from "@/types/character"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, 
        Image } from "@chakra-ui/react"

export type DetailModalComponentProp = {
     isOpen: boolean,
     onClose: () => void, 
     character: Character | null
}

export const DetailModalComponent = ({isOpen, onClose, character}: DetailModalComponentProp) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{character?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Image src={character?.image}/>
                {/* more details here */}
            </ModalBody>
        
        </ModalContent>
    </Modal>
    )

}