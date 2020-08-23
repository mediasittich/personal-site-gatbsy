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
      sort: { fields: published_at, order: DESC }
      filter: { draft: { eq: false } }
    ) {
      nodes {
        seo {
          meta_title
          meta_description
        }
        strapiId
        title
        slug
        # status
        # author {
        #   username
        # }
        published_at(formatString: "DD MMMM YYYY")
        content
        tag {
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
