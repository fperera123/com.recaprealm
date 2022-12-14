const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  // collectionTypes: ['universal'],
  collectionTypes: [{
    singularName: 'universal',
    queryParams: {
      populate: {
        'slices': {
          populate: "*"
        },
      },
    },
  }],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `Shade Gatsby`,
  },
  // flags: {
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   PRESERVE_WEBPACK_CACHE: true,
  //   THE_FLAG: false,
  //   DEV_SSR: true,
  //   FAST_REFRESH: true,
  // },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `image`),
        // `${__dirname}/src/assets/image`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
