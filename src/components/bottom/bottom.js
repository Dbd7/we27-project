import React from 'react'
import { listGames, iconGame } from './bottom.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Bottom = () => {
    return (
        <div className={listGames}>
            <StaticImage src="../../images/kiss-90px.png" alt="918kiss" className={iconGame} />
            <StaticImage src="../../images/mega-90px.png" alt="mega888" className={iconGame} />
            <StaticImage src="../../images/pussy-90px.png" alt="pussy888" className={iconGame} />
            <StaticImage src="../../images/xe-90px.png" alt="xe88" className={iconGame} />
            <StaticImage src="../../images/newtown-90px.png" alt="newtown" className={iconGame} />
            <StaticImage src="../../images/scr-90px.png" alt="scr888" className={iconGame} />
            <StaticImage src="../../images/evo-90px.png" alt="evo888" className={iconGame} />
            <StaticImage src="../../images/joker-90px.png" alt="joker" className={iconGame} />
        </div>
    )
}

export default Bottom;