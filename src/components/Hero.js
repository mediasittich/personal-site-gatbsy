import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="hero-wrapper">
      <div className="hero-img">
        <Image fluid={fluid} />
      </div>
      <div className="hero-text">
        <h1 className="hero-title">
          Hey! I'm <b>David</b>
        </h1>
        <p className="hero-description">
          Breakfast procuring no end happiness allowance assurance frank. Met
          simplicity nor difficulty unreserved who. Entreaties mr conviction
          dissimilar me astonished estimating cultivated.
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero
