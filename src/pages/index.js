import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiPosts: { nodes: posts },
  } = data

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} title="featured projects" showLink />
      <Posts posts={posts} title="blog" showLink />
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
