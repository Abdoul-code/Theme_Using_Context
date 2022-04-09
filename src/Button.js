import React from "react"
import {ThemeContext} from "./ThemeContext"
function Button(props){
    const {theme,toggleTheme} = useContext(ThemeContext)
    return(
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Toggle Theme
        </button>
    )
}

export default Button