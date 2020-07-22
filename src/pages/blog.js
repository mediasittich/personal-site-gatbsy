import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

const Blog = ({
  data: {
    allStrapiPosts: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Posts posts={posts} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiPosts {
      nodes {
        id
        title
        slug
        description
        date(formatString: "MMMM DD, YYYY")
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
