require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    `Contentful spaceId and the access token need to be provided. ENV:${process.env.NODE_ENV}`
  )
}
module.exports = {
  siteMetadata: {
    title: 'Music & Dev',
    author: 'Saturno Mangieri - github.com/theghost1980',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/gatsby-icon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saturnoman`,
        short_name: `Saturnoman`,
        start_url: `/`,
        background_color: `#00488E`,
        theme_color: `#00488E`,
        display: `browser`,
        icon: `src/images/gatsby-icon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-K1B2JSEB49", // Google Analytics / GA
        ],
      },
    },
  ],
}
