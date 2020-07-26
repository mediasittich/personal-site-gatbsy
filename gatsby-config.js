/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Gatsby Site",
    description: "some random description",
    author: "Regina Galambos",
    twitterUsername: "@mediasittich",
    image: "/twitter-img.png",
    siteUrl: "https://www.reginagalambos.me",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`, `articles`],
        //If using single types place them in this array.
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Poppins`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
