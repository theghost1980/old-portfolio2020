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
    siteUrl: 'https://saturnoman.com',
    title: 'Music & Dev',
    author: 'Saturno Mangieri - github.com/theghost1980',
    description: 'A modern portfolio based on GatsbyJS, ReactJS, headless CMS, SEO, featuring paypal checkout, music downloads and web technologies.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`, //generates the sitemap files .xml
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saturnoman`,
        short_name: `Saturnoman`,
        start_url: `/`,
        background_color: `#00488E`,
        theme_color: `#00488E`,
        display: `minimal-ui`,
        icon: `src/images/planet.png`, // This path is relative to the root of the site.
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://saturnoman.com',
        sitemap: 'https://saturnoman.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://saturnoman.com`,
        stripQueryString: true,
      },
    },
  ],
}
