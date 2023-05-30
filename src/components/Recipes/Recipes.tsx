import React from 'react';
import { Card, CardList } from '../Card';

type NodeType = {
  id: string;
  excerpt: string;
  fields: {
    slug: string;
    excerpt: string;
  };
  frontmatter: {
    title: string;
  };
};

const Recipes: React.FC<{
  allMdx: {
    edges: [
      {
        node: NodeType;
      }
    ];
  };
}> = ({ allMdx }) => (
  <CardList>
    {allMdx.edges.map(({ node }) => (
      <Card
        key={node.id}
        cta="View Recipe"
        description={node.fields.excerpt}
        link={node.fields.slug}
        title={node.frontmatter.title}
      />
    ))}
  </CardList>
);

export default Recipes;
