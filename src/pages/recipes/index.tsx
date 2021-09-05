import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  Layout,
  SEO,
  Recipes,
  Container,
  Heading,
  Panel,
} from '../../components';

const RecipesPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
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
    <Layout>
      <SEO title="Recipes" />
      <Panel>
        <Container>
          <Heading element="h1" theme="dark" text="Recipes" />
          <Recipes markdownRemark={data.allMarkdownRemark} />
          <Link to="/tags">All Tags</Link>
        </Container>
      </Panel>
    </Layout>
  );
};

export default RecipesPage;
