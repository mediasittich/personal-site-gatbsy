import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import Posts from "../components/Posts"
import Pagination from "../components/Pagination"

const Blog = ({
  location,
  data: {
    allStrapiArticles: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <section className="page container">
        <Posts posts={posts} location={location.pathname} />
        {/* <Pagination /> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allStrapiArticles(sort: { fields: createdAt, order: DESC }) {
//       nodes {
//         id
//         title
//         slug
//         description
//         content
//         createdAt(formatString: "DD MMMM YYYY")
//         tag {
//           id
//           title
//         }
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Blog
