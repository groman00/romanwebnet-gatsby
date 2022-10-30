import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  Layout,
  SEO,
  Container,
  Heading,
  Panel,
  CardList,
  Card,
} from '../../components';

const PhotosPage: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: {
            categories: { in: "Photos" }
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
      <SEO title="Photos" />
      <Panel>
        <Container>
          <Heading element="h1" theme="dark" text="Photos" />
          <CardList>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                key={node.id}
                cta="View Photos"
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

export default PhotosPage;
