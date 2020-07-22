import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const BlogPost = () => {
  return <div></div>
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: strapiPosts(slug: { eq: $slug }) {
      content
    }
  }
`

export default BlogPost
