import React from "react";
import { iconBar } from "./icon.module.css"
const Icon = ({ name, linkSrc, children }) => {
    return (
        <a href={linkSrc} className={iconBar}>
            {children}
            <p style={{margin: 0}}>{name}</p>
        </a>
    )
};

export default Icon;