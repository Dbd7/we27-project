import React from "react";
import { content, sectionContainer } from "./middle.module.css";

const Middle = ({ children }) => {
    return (
        <div className={content}>
            <section className={sectionContainer}>
                {children}
            </section>
        </div>
    )
}

export default Middle;