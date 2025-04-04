import { Box, useMediaQuery, useMultiStyleConfig, Image, Button } from "@chakra-ui/react"
import portal from '@/assets/portal1.png'
import { useLocation } from "react-router-dom"

export const NavbarComponent = () => {
    const styles = useMultiStyleConfig('NavbarComponentTheme', {})
    const location = useLocation()
    const currentPage = location.pathname


    const [isMobile] = useMediaQuery('(max-width:500px)')
    
    if(isMobile){
        return <>
        Mobile version comes here
        </>
    }

    return (
      <Box __css={styles.lgHeaderBar}>
        <Box __css={styles.navbar}>
            <Image src={portal}/>
            <Button variant={currentPage.includes('characters') ? 'navItem': 'link'}>Characters</Button>
            <Button variant={currentPage.includes('locations') ? 'active': 'link'}>Locations</Button>
            <Button variant={currentPage.includes('episodes') ? 'active': 'link'}>Episodes</Button>
        </Box>
        
      </Box>
    )
}