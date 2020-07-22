import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import Post from "./Post"

const Posts = ({ posts, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {posts.map(post => {
          return <Post key={post.id} {...post} />
        })}
      </div>
      {showLink && (
        <Link to="/blog/" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}

export default Posts
