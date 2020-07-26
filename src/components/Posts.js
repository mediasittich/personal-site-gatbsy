import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import Post from "./Post"
import { Row, Col } from "react-bootstrap"

const Posts = ({ posts, title, showLink }) => {
  return (
    <div>
      <div>
        <Title title={title} />
        <div className="section-center blogs-center">
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </div>
      </div>
      {showLink && (
        <Link to="/blog/" className="btn center-btn">
          blog
        </Link>
      )}
    </div>
  )
}

export default Posts
