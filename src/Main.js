import React,{useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Main(props){
    const {theme} = useContext(ThemeContext)
    return(
        <main>
       <h1>Click the Button to toggle the light Meme</h1>
        </main>
    )
}

export default Main