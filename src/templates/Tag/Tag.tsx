import React from 'react';
import { graphql, Link } from 'gatsby';
import Panel from '../../components/Panel';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Recipes from '../../components/Recipes';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Panel>
      <Container>
        <Heading element="h1" theme="dark" text={tagHeader} />
        <Recipes markdownRemark={data.allMarkdownRemark} />
        <Link to="/tags">All Tags</Link>
      </Container>
    </Panel>
  );
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
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
