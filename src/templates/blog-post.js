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
      <section className="blog-template">
        <div className="section-center">
          <h2>
            {title} <br />
            <small>
              Some awesome subtitle for this really amazing blog post.
            </small>
          </h2>
          {image && <Image fluid={image.childImageSharp.fluid} />}
          <p>{username}</p>
          <p>{publishedAt}</p>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          {/* <Link to="/blog/" className="btn center-btn">
            blog
          </Link> */}
          <footer>
            {tags.map(tag => {
              return <span key={tag.id}>{tag.name}</span>
            })}
          </footer>
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
