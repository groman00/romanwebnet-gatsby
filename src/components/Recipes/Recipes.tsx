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

const Recipes: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            categories: { in: "Recipes" }
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
    <Panel>
      <Container>
        <Heading element="h1" theme="dark" text="Recipes" />
        <CardList>
          {data.allMarkdownRemark.edges.map(
            ({ node }: Record<string, NodeType>) => (
              <Card
                key={node.id}
                cta="View Recipe"
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

export default Recipes;
