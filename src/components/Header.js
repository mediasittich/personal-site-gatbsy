import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/pageLinks"
import { Navbar, Container, Nav } from "react-bootstrap"

const Header = ({ toggleSidebar }) => {
  return (
    <div className="sticky-outer-wrapper">
      <div className="sticky-inner-wrapper">
        <header className="navbar-header-wrapper">
          <div className="navbar-container">
            <div className="navbar-mobile-nav-wrapper"></div>
            <div className="navbar-brand">
              <Link to="/">siteTitle</Link>
            </div>
            <div className="navbar-nav-wrapper">
              <PageLinks styleClass="nav-links" />
            </div>
          </div>
        </header>
      </div>
    </div>

    //     {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
    //       <FaAlignRight></FaAlignRight>
    //     </button> */}
  )
}

export default Header
