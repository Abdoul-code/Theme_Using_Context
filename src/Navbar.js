import React,{useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Navbar(props){
    const {theme} = useContext(ThemeContext)
    return(
        <navbar>
         <h2>Home</h2>
         <h2>About</h2>
         <h2>Contact</h2>
        </navbar>
    )
}

export default Navbar