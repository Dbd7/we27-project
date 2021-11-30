import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { content } from "./middle.module.css";

const Middle = ({ children }) => {
    return (
        <div className={content}>
            {children}
        </div>
    )
}

export default Middle;