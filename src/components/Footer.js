import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <SocialLinks styleClass="footer-links" />
            <p>Copyright &copy; siteTitle {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
