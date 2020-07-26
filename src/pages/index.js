import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import SEO from "../components/SEO"
import { Container, Row } from "react-bootstrap"

export default function Home({ data }) {
  const {
    // allStrapiProjects: { nodes: projects },
    allStrapiPosts: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <div>
        {/* <Hero /> */}
        <div>
          <Posts posts={posts} title="latest blog posts" showLink />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        github
        url
        stack {
          title
          id
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

    allStrapiPosts(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        description
        content
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
