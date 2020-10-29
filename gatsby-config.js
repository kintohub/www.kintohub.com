const path = require("path")

module.exports = {
  siteMetadata: {
    title: `KintoHub - A Modern Fullstack App Platform`,
    description: `KintoHub is an all-in-one platform to combine and deploy your backend services, websites, cron jobs, databases and everything your app needs in one place.`,
    author: `@kintohub`,
    siteUrl: "https://www.kintohub.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/resources`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/resources/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__filename, "src"),
          components: path.resolve(__dirname, "src/components"),
          resources: path.resolve(__dirname, "src/resources"),
          pages: path.resolve(__dirname, "src/pages"),
          theme: path.resolve(__dirname, "src/theme"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-twitter-pixel`,
      options: {
        pixelId: "o2kd7",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,500,600,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: process.env.GATSBY_SEGMENT_WRITE_KEY,
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: process.env.GATSBY_TRACK_PAGE,
      },
    },
  ],
}
