import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Icon from "../components/icon";
import {} from "./gamelist.module.css"

const GamelistPage = () => {
    const games = [
        {name:'918kiss', link: 'http://c1.d.918kiss.com/', icon: <StaticImage alt='whatsapp' src='../images/KS.png' />},
        {name:'mega888', link: 'https://m.aphqw.com/mega/index.html', icon: <StaticImage alt='telegram' src='../images/MG.png' />},
        {name:'pussy888', link: 'http://md.pussy888.com/', icon: <StaticImage alt='whatsapp' src='../images/PY.png' />},
        {name:'xe88', link: 'https://d.playalotgame.com/', icon: <StaticImage alt='telegram' src='../images/XE.png' />},
        {name:'evo888', link: 'http://d3.evo288.com/', icon: <StaticImage alt='whatsapp' src='../images/EV.png' />},
        {name:'wuha888', link: 'http://d.wuha888.net/', icon: <StaticImage alt='telegram' src='../images/WH.png' />},
        {name:'joker', link: 'https://www.joker123.net/', icon: <StaticImage alt='whatsapp' src='../images/JK.png' />},
        {name:'newtown', link: 'http://www.nbig33.com', icon: <StaticImage alt='telegram' src='../images/NT.png' />},
    ]

    return (
        <Layout pageTitle="GAME LIST">
            {games.map((game, index) => <Icon key={index} name={game.name}  linkSrc={game.link}>{game.icon}</Icon>)}
        </Layout>
    )
}

export default GamelistPage;