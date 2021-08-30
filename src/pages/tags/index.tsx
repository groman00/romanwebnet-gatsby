import React from 'react';
import { graphql, Link } from 'gatsby';
import Heading from '../../components/Heading';
import Container from '../../components/Container';
import Panel from '../../components/Panel';

const Tags: React.FC = ({ data }) => {
  const tags = data.allMarkdownRemark.group.map((tag) => tag.fieldValue);
  return (
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
