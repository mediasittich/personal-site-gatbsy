import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Posts from "../components/Posts"
import Pagination from "../components/Pagination"

const Blog = ({
  location,
  data: {
    allStrapiPosts: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <section className="page container">
        <Posts posts={posts} location={location.pathname} />
        {/* <Pagination /> */}
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
        date(formatString: "DD MMMM YYYY")
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
