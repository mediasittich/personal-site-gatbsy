import React from "react"
import { Link } from "gatsby"

const DATA = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   text: "about",
  //   url: "/about/",
  // },
  {
    id: 3,
    text: "Blog",
    url: "/blog/",
  },
  // {
  //   id: 4,
  //   text: "projects",
  //   url: "/projects/",
  // },
]

const LINKS = DATA.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>{LINKS}</ul>
  )
}
