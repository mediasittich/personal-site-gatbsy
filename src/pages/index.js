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
