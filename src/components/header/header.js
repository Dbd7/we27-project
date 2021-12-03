import React from "react"
import { headerLogo } from "./header.module.css"
import SiteTitle from "./siteTitle";

const Header = () => {
    return (
        <header className={headerLogo}>
            <SiteTitle />
        </header>
    )
}

export default Header;