import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
import { imageContainer, slideshowImage } from './index.module.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="WE27project">
      <div>
        <div className={imageContainer}>
          <StaticImage alt="dog" src="../images/dog.jpg" className={slideshowImage}/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage