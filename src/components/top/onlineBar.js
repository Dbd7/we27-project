import React from "react"
import { onlineBar, onlineDot } from "./onlineBar.module.css"

const OnlineBar = () => {
    return (
        <p className={onlineBar}><span className={onlineDot}>•</span>Online</p>
    )
}

export default OnlineBar;