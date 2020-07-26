import React from "react"
import { Link } from "gatsby"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <div className="previous-page">
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="page-number">Page 2 Of 3</div>
      <div className="next-page">
        <Link to="/">
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Pagination
