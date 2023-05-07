import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Layout,
  SEO,
  Container,
  Heading,
  Panel,
  CardList,
  Card,
} from '../../components';

const CodePage: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: {
            categories: { in: "Code Examples" }
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
    <Layout>
      <SEO title="Code Examples" />
      <Panel>
        <Container>
          <Heading element="h1" theme="dark" text="Code" />
          <CardList>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                key={node.id}
                cta="View Post"
                description={node.excerpt!}
                link={node.fields!.slug!}
                title={node.frontmatter!.title!}
              />
            ))}
          </CardList>
        </Container>
      </Panel>
    </Layout>
  );
};

export default CodePage;
