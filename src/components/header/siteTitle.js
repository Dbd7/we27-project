import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { container, title } from "./siteTitle.module.css";

const SiteTitle = () => {
    return (
        <div className={container}>
            <StaticImage className={title} alt='wangemas' src='../../images/wangemas.png' />
        </div>
    )
}

export default SiteTitle;