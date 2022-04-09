import React from "react"
import ReactDom from "react-dom"
import {ThemeContextProvider} from "./ThemeContext"
import App from "./App"
ReactDom.render(
    <ThemeContextProvider>
         <App />
    </ThemeContextProvider>
,document.getElementById("root"))