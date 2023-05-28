/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

const toPostsQuery = (type) => `
  query {
    postsRemark: ${type}(
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
          internal {
            contentFilePath
          }
        }
      }
    }
    tagsGroup: ${type}(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const remarkResult = await graphql(toPostsQuery('allMarkdownRemark'));
  const mdxResult = await graphql(toPostsQuery('allMdx'));
  const posts = [
    ...remarkResult.data.postsRemark.edges,
    ...mdxResult.data.postsRemark.edges,
  ];

  const postTemplate = path.resolve('./src/templates/BlogPost/BlogPost.tsx');

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  const tags = [
    ...remarkResult.data.tagsGroup.group,
    ...mdxResult.data.tagsGroup.group,
  ];

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

// const postTemplate = path.resolve(`./src/templates/post.jsx`)

// // Rest of createPages API...

// const { data } = await graphql(`
//   {
//     allMdx {
//       nodes {
//         id
//         frontmatter {
//           slug
//         }
// // highlight-start
//         internal {
//           contentFilePath
//         }
// // highlight-end
//       }
//     }
//   }
// `)

// data.allMdx.nodes.forEach(node => {
//   actions.createPage({
//     path: node.frontmatter.slug,
//     component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`, // highlight-line
//     context: {
//       id: node.id,
//     },
//   })
// })





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
