import React, { useState } from "react"
import Layout from "../components/Layout"

const LayoutContainer = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMobileNav = () => {
    setIsOpen(!isOpen)
  }
  const [isSticky, setSticky] = useState(false)

  return <Layout {...props} isOpen={isOpen} toggleMobileNav={toggleMobileNav} />
}

export default LayoutContainer
