import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
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
    tags,
    image,
  } = data.post

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <section className="blog-template-wrapper container">
        <article className="blog-article">
          <h1 className="blog-title">
            {title}
            {/* <br /> */}
            {/* <small>
              Some awesome subtitle for this really amazing blog post.
            </small> */}
          </h1>
          <span className="blog-date">{publishedAt}</span>
          {image && (
            <div className="blog-cover-image">
              <Image fluid={image.childImageSharp.fluid} />
            </div>
          )}
          {/* <p>{username}</p> */}

          <main className="blog-content-wrapper">
            <ReactMarkdown source={content} />
          </main>
          {/* <Link to="/blog/" className="btn center-btn">
            blog
          </Link> */}
          <footer className="blog-footer-wrapper">
            <div className="blog-tags">
              {tags.map(tag => {
                return <span key={tag.id}>#{tag.name}</span>
              })}
            </div>
            <div className="blog-share"></div>
          </footer>
        </article>
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
