import React from "react"

const Title = ({ title }) => {
  return <div className="section-title">{title || "default title"}</div>
}

export default Title
