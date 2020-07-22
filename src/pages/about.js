import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Title from "../components/Title"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, info, image } = nodes[0]

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        id
        title
        info
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

export default About
