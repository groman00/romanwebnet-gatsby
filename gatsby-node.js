/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(
        filter: { frontmatter: { status: { eq: "published" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              categories
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/BlogPost/BlogPost.tsx'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue.replace(' ', '-').toLowerCase()}/`,
      component: path.resolve('./src/templates/Tag/Tag.tsx'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
//   getConfig,
// }) => {
//   const config = getConfig();

//   // actions.replaceWebpackConfig(config)

//   if (process.env.NODE_ENV === 'development') {
//     console.log('=====WEBPACK=====', config.plugins[0].constructor.name);
//     console.log(process.env.NODE_ENV);
//     // let IgnorePlugin = config.plugins.find(
//     //   (plugin) => plugin.constructor.name === 'IgnorePlugin'
//     // );

//     // const fastRefresh = plugins.fastRefresh();
//     // fastRefresh.options.exclude = [/node_modules/i, /__generated__/i];
//     actions.setWebpackConfig({
//       plugins: config.plugins,
//     });
//   }
// };
