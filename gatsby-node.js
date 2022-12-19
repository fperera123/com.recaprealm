const { log } = require("console");
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~components": path.resolve(__dirname, "./src/components"),
        "~image": path.resolve(__dirname, "./src/assets/image"),
        "~assets": path.resolve(__dirname, "./src/assets"),
        "~sections": path.resolve(__dirname, "./src/sections"),
        "~data": path.resolve(__dirname, "./src/data"),
        "~styled": path.resolve(__dirname, "./src/styles"),
      }
    }
  });
};

// request for nodes to use in creating pages.
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getUniversalPages = makeRequest(graphql, `
      {
        allStrapiUniversal {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
    console.log(result);
    // Create pages for each universal.
    result.data.allStrapiUniversal.edges.forEach(({ node }) => {
      const pagePath = node.slug == "#home" ? '/' : node.slug;
      createPage({
        path: pagePath,
        component: path.resolve(`src/templates/Universal.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });


  return Promise.all([
    getUniversalPages,
  ])
};