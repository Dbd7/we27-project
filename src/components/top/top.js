import React from "react";
import { heading } from "./top.module.css"

const Top = ({ pageTitle }) => {
    return (
        <h1 className={heading}>{pageTitle}</h1>
    )
}

export default Top;