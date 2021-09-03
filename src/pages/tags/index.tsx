import React from 'react';
import { graphql, Link } from 'gatsby';
import Heading from '../../components/Heading';
import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Tags: React.FC = ({ data }) => {
  const tags = data.allMarkdownRemark.group.map((tag) => tag.fieldValue);
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;

export default Tags;
