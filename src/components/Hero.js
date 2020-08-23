import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SocialLinks from "../constants/socialLinks"

const Hero = ({ title, description, image, social }) => {
  return (
    <section className="hero-wrapper">
      <div className="hero-img">
        <Image fluid={image} />
      </div>
      <div className="hero-text">
        <h1 className="hero-title">{/* Hey! I'm <b>David</b> */}</h1>
        <p className="hero-description">
          <ReactMarkdown source={description} />
          {/* Breakfast procuring no end happiness allowance assurance frank. Met
          simplicity nor difficulty unreserved who. Entreaties mr conviction
          dissimilar me astonished estimating cultivated. */}
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero
