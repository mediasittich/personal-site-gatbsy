import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello people!
      <Link to="/blog/">Blog</Link>
    </div>
  )
}
