import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Posts from "../components/Posts"
import Pagination from "../components/Pagination"

const Blog = ({
  location,
  data: {
    allStrapiArticles: { nodes: posts },
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
    allStrapiArticles(
      sort: { fields: publishedAt, order: DESC }
      filter: { status: { eq: "published" } }
    ) {
      nodes {
        Seo {
          metaTitle
          metaDescription
        }
        id
        title
        slug
        status
        author {
          username
        }
        publishedAt(formatString: "DD MMMM YYYY")
        content
        tags {
          id
          name
        }
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
