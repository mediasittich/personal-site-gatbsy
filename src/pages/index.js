import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import SEO from "../components/SEO"

export default function Home({ location, data }) {
  const {
    // allStrapiProjects: { nodes: projects },
    allStrapiArticles: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <main className="content-wrapper">
        <Hero />
        <Posts
          posts={posts}
          location={location.pathname}
          title="Latest Blog Posts"
          showLink
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiArticles(sort: { fields: createdAt, order: DESC }, limit: 5) {
      nodes {
        id
        title
        slug
        description
        content
        createdAt(formatString: "DD MMMM YYYY")
        tag {
          id
          title
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
