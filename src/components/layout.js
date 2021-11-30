import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { outer, mainContainer, lineBreak, background } from './layout.module.css'
import Header from './header/header'
import Top from './top/top'
import Middle  from './middle/middle'
import NavBar from "./header/navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "background.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }`
  )

  const backgroundData = data.file.childImageSharp.fluid;

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