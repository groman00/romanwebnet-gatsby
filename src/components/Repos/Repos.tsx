import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';
import { Card, CardList } from '../Card';

const Repos: React.FC = () => {
  const {
    allContentYaml: {
      edges: [
        {
          node: { items, title: pageTitle },
        },
      ],
    },
  } = useStaticQuery<GatsbyTypes.ReposQueryQuery>(graphql`
    query ReposQuery {
      allContentYaml(filter: { contentId: { eq: "repos" } }) {
        edges {
          node {
            items {
              slug
              title
              description
              tags
            }
            title
          }
        }
      }
    }
  `);
  return (
    <Panel>
      <Container>
        {pageTitle && <Heading element="h2" theme="dark" text={pageTitle} />}
        {items && items.length > 0 && (
          <CardList>
            {items.map(({ slug, title, description, tags }) => (
              <Card
                key={slug}
                cta="View on Github"
                description={description}
                link={`https://github.com/groman00/${slug}`}
                subtext={tags}
                title={title}
                external
              />
            ))}
          </CardList>
        )}
      </Container>
    </Panel>
  );
};

export default Repos;
