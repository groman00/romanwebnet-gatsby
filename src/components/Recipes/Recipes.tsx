import React from 'react';
import { Card, CardList } from '../Card';

type NodeType = {
  id: string;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

export type MarkdownRemark = {
  edges: Record<string, NodeType>[];
};

const Recipes: React.FC<{ markdownRemark: MarkdownRemark }> = ({
  markdownRemark,
}) => (
  <CardList>
    {markdownRemark.edges.map(({ node }) => (
      <Card
        key={node.id}
        cta="View Recipe"
        description={node.excerpt}
        link={node.fields.slug}
        title={node.frontmatter.title}
      />
    ))}
  </CardList>
);

export default Recipes;
