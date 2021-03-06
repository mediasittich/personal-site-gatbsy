import React from "react"
import Layout from "../containers/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Oops it's a dead end</h1>
          <Link to="/" className="btn center-btn">
            back to home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
