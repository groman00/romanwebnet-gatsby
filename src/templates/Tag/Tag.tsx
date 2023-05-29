import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  Panel,
  Container,
  Heading,
  Recipes,
  SEO,
  Layout,
} from '../../components';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title="Tags" />
      <Panel>
        <Container>
          <Heading element="h1" theme="dark" text={tagHeader} />
          <Recipes allMdx={data.allMdx} />
          <Link to="/tags">All Tags</Link>
        </Container>
      </Panel>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            excerpt
          }
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;

export default Tag;
