import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './top/header'
import Footer from './bottom/footer'
import { heading, outer, mainContainer, lineBreak, content, listGames } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`
  )
  return (
    <div className={outer}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header />
      <main className={mainContainer}>
        <h1 className={heading}>{pageTitle}</h1>
        <hr className={lineBreak} />
        <div className={content}>
          {children}
        </div>
        <hr classname={lineBreak} />
        <div className={listGames}>

        </div>
      </main>
    </div>
  )
}

export default Layout