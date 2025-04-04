import { Box, Button, Image, useMultiStyleConfig } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import portal from '@/assets/portal.png'


export const LandingPage = () => {
    const styles = useMultiStyleConfig('LandingPageTheme', {})
    const navigate = useNavigate()
    return (
        <Box __css={styles.wrapper}>
            <Box __css={styles.innerWrapper}>
                <Image src={portal}></Image>
                <Box __css={styles.btnPosition}>
                    <Button variant='ghost' onClick={()=> navigate('/adventure')}>Adventure time</Button>
                </Box>
            </Box>
        </Box>
    )
}