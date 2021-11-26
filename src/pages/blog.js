import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  const blogs = data.allFile.nodes;
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {blogs.map(blog => <li key={blog.name}>{blog.name}</li>)}
      </ul>

    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default BlogPage