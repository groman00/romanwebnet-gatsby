import React from 'react';
import { graphql, Link } from 'gatsby';
import Panel from '../../components/Panel';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { Card, CardList } from '../../components/Card';

interface Post {
  frontmatter: { title: string };
  excerpt: string;
  html: string;
}

interface TagProps {
  data: { markdownRemark: Post };
}

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Panel>
      <Container>
        <Heading element="h1" theme="dark" text={tagHeader} />
        <CardList>
          {edges.map(
            ({
              node: {
                excerpt,
                fields: { slug },
                frontmatter: { title },
              },
            }) => (
              <Card
                key={slug}
                cta="View Recipe"
                description={excerpt}
                link={slug}
                title={title}
              />
            )
          )}
        </CardList>
        <Link to="/tags">All tags</Link>
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
