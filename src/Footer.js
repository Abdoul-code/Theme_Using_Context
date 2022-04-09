import React,{useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Footer(){
    const {theme} = useContext(ThemeContext)
    return(
        <footer>
         <h2>Awesome Footer</h2>
        </footer>
    )
}

export default Footer