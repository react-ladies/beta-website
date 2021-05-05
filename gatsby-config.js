// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.production`
})

module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    siteUrl: 'https://reactladies.com'
=======
    siteUrl: 'https://queerjs.com'
>>>>>>> repo-a/master
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
<<<<<<< HEAD
              family: 'Space Mono',
=======
              family: 'Roboto Mono',
>>>>>>> repo-a/master
              variants: ['300', '400', '500']
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
<<<<<<< HEAD
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: process.env.AIRTABLE_TABLE,
=======
        apiKey: process.env.GATSBY_AIRTABLE_KEY,
        tables: [
          {
            baseId: `appXX3u6yUPjqQFrE`,
            tableName: `all`,
>>>>>>> repo-a/master
            queryName: `attendees` // optional
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data',
        name: 'events'
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Event'
      }
    }
  ]
}
