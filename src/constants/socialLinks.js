import React from "react"
import { FaGithub, FaTwitterSquare, FaLinkedin, FaMedium } from "react-icons/fa"

const DATA = [
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https:twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https:twitter.com",
  },
  {
    id: 3,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https:twitter.com",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https:twitter.com",
  },
]

const LINKS = DATA.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link"></a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{LINKS}</ul>
  )
}
