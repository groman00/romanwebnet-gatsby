/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const [rawExcerpt] = node.body.split('{/* excerpt */}')
    createNodeField({
      name: 'excerpt',
      node,
      value: rawExcerpt.trim(),
    })
  }

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
