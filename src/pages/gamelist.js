import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Icon from "../components/icon";
import {} from "./gamelist.module.css"

const GamelistPage = () => {
    const games = [
        {name:'918kiss', link: 'http://c1.d.918kiss.com/', icon: <StaticImage alt='918kiss' src='../images/ks.png' />},
        {name:'mega888', link: 'https://m.aphqw.com/mega/index.html', icon: <StaticImage alt='mega888' src='../images/mg.png' />},
        {name:'pussy888', link: 'http://md.pussy888.com/', icon: <StaticImage alt='pussy888' src='../images/py.png' />},
        {name:'xe88', link: 'https://d.playalotgame.com/', icon: <StaticImage alt='xe88' src='../images/xe.png' />},
        {name:'evo888', link: 'http://d3.evo288.com/', icon: <StaticImage alt='evo888' src='../images/ev.png' />},
        {name:'wuha888', link: 'http://d.wuha888.net/', icon: <StaticImage alt='wuha888' src='../images/wh.png' />},
        {name:'joker', link: 'https://www.joker123.net/', icon: <StaticImage alt='joker' src='../images/jk.png' />},
        {name:'newtown', link: 'http://www.nbig33.com', icon: <StaticImage alt='newtown' src='../images/nt.png' />},
    ]

    return (
        <Layout pageTitle="GAME LIST">
            {games.map((game, index) => <Icon key={index} name={game.name}  linkSrc={game.link}>{game.icon}</Icon>)}
        </Layout>
    )
}

export default GamelistPage;