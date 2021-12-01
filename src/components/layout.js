import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { outer, mainContainer, lineBreak } from './layout.module.css'
import Header from './header/header'
import Top from './top/top'
import Middle  from './middle/middle'
import NavBar from "./header/navbar";

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
        <Top pageTitle={pageTitle} />
        <hr className={lineBreak} />
        <Middle>
          {children}
        </Middle>
        <hr className={lineBreak} />
        <NavBar />
      </main>
    </div>
  )
}

export default Layout