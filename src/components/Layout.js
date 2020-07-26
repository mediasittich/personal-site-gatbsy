import React from "react"
import Header from "./Header"
// import Sidebar from "../components/Sidebar"
import Footer from "./Footer"

// import "../styles/main.css"

const Layout = ({ children, isOpen, toggleMobileNav }) => {
  return (
    <>
      <Header />
      {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
