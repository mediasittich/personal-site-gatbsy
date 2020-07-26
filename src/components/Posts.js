import React from "react"
import { Link } from "gatsby"
import SectionTitle from "./SectionTitle"
import Post from "./Post"
import { Row, Col } from "react-bootstrap"

const Posts = ({ location, posts, title, showLink }) => {
  return (
    <div className="blog-posts-wrapper container">
      {location !== "/blog/" ? <SectionTitle title={title} /> : ""}

      {posts.map(post => {
        return <Post key={post.id} {...post} />
      })}

      {/* {showLink && (
        <Link to="/blog/" className="btn center-btn">
          blog
        </Link>
      )} */}
    </div>
  )
}

export default Posts
