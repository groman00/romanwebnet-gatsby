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
    // console.log('13 slug:', slug);
    // console.log('frontmatter: ', node.frontmatter.categories);
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
      allMarkdownRemark(
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
    }
  `);

  const tagStore = (() => {
    const store = {};

    return {
      store,
      add: (tag, slug) => {
        if (store[tag]) {
          store[tag].push(slug);
        } else {
          store[tag] = [slug];
        }
      },
    };
  })();

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log('40 node:', node.frontmatter.tags);

    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) =>
        tagStore.add(tag, node.fields.slug)
      );
    }

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
  console.log('Tag Store', tagStore.store);
};
