import React from 'react';
import { graphql, Link } from 'gatsby';

const Tags: React.FC = ({ data }) => {
  const tags = data.allMarkdownRemark.group.map((t) => t.fieldValue);
  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key="tag">
            <Link to={`/tags/${tag.replace(' ', '-').toLowerCase()}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
