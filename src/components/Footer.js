import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* <SocialLinks styleClass="footer-links" /> */}
      <p>Copyright &copy; siteTitle {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
