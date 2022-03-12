import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Container, SEO } from '@components';
import styles from './blogPost.module.scss';

interface BreadCrumbProps {
  title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => (
  <div className={styles.breadcrumb}>
    <a href="/recipes">Recipes</a>
    <span className={styles.breadcrumbSpacer}>{'>'}</span>
    <span>{title}</span>
  </div>
);

interface Post {
  frontmatter: { title: string };
  excerpt: string;
  html: string;
}

interface BlogPostProps {
  data: { markdownRemark: Post };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} />
      <article className={styles.article}>
        <Container>
          <BreadCrumb title={title} />
          <h1 className={styles.title}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;
export default BlogPost;
