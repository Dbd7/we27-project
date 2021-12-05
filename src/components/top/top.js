import React from "react";
import ClockBar from "./clockBar";
import OnlineBar from "./onlineBar";
import { heading, statusBar, sideElement } from "./top.module.css"

const Top = ({ pageTitle }) => {
    return (
        <div className={statusBar}>
            <OnlineBar className={sideElement} />
            <h1 className={heading}>{pageTitle}</h1>
            <ClockBar className={sideElement}/>
        </div> 
    )
}

export default Top;