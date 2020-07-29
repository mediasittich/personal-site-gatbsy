import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../containers/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const BlogPost = ({ data }) => {
  const {
    Seo: { metaTitle, metaDescription },
    title,
    author: { username },
    publishedAt,
    content,
    tags: { id, name },
    image,
  } = data.post

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog/" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: strapiArticles(slug: { eq: $slug }) {
      title
      author {
        username
      }
      publishedAt(formatString: "DD MMMM YYYY")
      content
      tags {
        id
        name
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Seo {
        metaTitle
        metaDescription
      }
    }
  }
`

export default BlogPost
