import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../NavbarComponent/NavbarComponent"

export const RouterWrapper = () => {
   return( 
    <>
        <NavbarComponent/>
        <Outlet/>
    </>
   )
}