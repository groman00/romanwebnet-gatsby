import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import { Card, CardList } from '../Card';

interface NodeType {
  id: string;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

const Cocktails: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            categories: { in: "Cocktails" }
            status: { eq: "published" }
          }
        }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Panel theme="light">
      <Container>
        <Heading element="h1" theme="dark" text="Cocktails" />
        <CardList>
          {data.allMarkdownRemark.edges.map(
            ({ node }: Record<string, NodeType>) => (
              <Card
                key={node.id}
                cta="View Cocktails"
                description={node.excerpt}
                link={node.fields.slug}
                title={node.frontmatter.title}
              />
            )
          )}
        </CardList>
      </Container>
    </Panel>
  );
};

export default Cocktails;
