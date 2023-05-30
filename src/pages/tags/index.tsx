import React from 'react';
import { graphql, Link } from 'gatsby';
import { Heading, Container, Panel, Layout, SEO } from '../../components';

const Tags: React.FC = ({ data }) => {
  const tags = data.allMdx.group.map((tag) => tag.fieldValue);
  return (
    <Layout>
      <SEO title="Tags" />
      <Panel>
        <Container>
          <Heading element="h1" theme="dark" text="Tags" />
          <ul>
            {tags.map((tag) => (
              <li key="tag">
                <Link to={`/tags/${tag.replace(' ', '-').toLowerCase()}`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Panel>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;

export default Tags;
