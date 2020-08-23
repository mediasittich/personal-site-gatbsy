import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Hero from "../components/Hero"
import Posts from "../components/Posts"
import SEO from "../components/SEO"

export default function Home({ location, data }) {
  const {
    strapiAbout: { title, description, image, social },
    // allStrapiProjects: { nodes: projects },
    allStrapiArticles: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <main className="content-wrapper">
        <Hero
          title={title}
          description={description}
          image={image.childImageSharp.fluid}
          social={social}
        />
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
    strapiAbout {
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      social {
        id
        name
        url
      }
    }
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
        # draft
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
