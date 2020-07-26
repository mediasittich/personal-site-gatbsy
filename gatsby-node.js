const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts: allStrapiPosts {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        slug: post.slug,
      },
    })
  })
}
