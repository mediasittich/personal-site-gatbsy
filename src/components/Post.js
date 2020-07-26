import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Post = ({ id, title, image, date, category, slug, description }) => {
  const [day, month, year] = date.split(" ")

  return (
    <div className="post-card-wrapper" key={id}>
      <article className="post-card">
        <header className="post-date-image-wrapper">
          <div className="post-date">
            {day}
            <span>
              {month} {year}
            </span>
          </div>
          <div className="post-featured-image">
            <Link to={`/blog/${slug}`}>
              {image && <Image fluid={image.childImageSharp.fluid} />}
            </Link>
          </div>
        </header>
        <main className="post-content">
          <div className="post-tags">
            <span>#{category}</span>
          </div>
          <h2 className="post-title">
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p className="post-excerpt">{description}</p>
          <div className="read-more-link">
            <Link to={`/blog/${slug}`}>Read More</Link>
          </div>
        </main>

        {/* {image && (
            <Image fluid={image.childImageSharp.fluid} className="blog-img" />
          )} */}
        {/* <p>{date}</p> */}
      </article>
    </div>
  )
}

// id, title, image, date, category, slug, description
Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Post
