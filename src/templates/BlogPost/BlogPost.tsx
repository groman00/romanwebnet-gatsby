import React, { PropsWithChildren } from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  Container,
  SEO,
  Gallery,
  CodeExample,
  BreadCrumb,
} from '@components';
import * as styles from './blogPost.module.scss';
import { MDXProvider } from '@mdx-js/react';

const BlogPost: React.FC<PropsWithChildren> = ({ data, children }) => {
  const post = data.mdx;
  const { title, images } = post.frontmatter!;
  const [rootCategory] = post.frontmatter?.categories ?? [];

  return (
    <Layout>
      <SEO title={title} description={post.excerpt} />
      <article className={styles.article}>
        <Container>
          <BreadCrumb title={title} category={rootCategory} />
          <h1 className={styles.title}>{title}</h1>
          {images && (
            <Gallery title={title} files={images} slug={post.fields.slug} />
          )}
          <MDXProvider components={{ CodeExample }}>{children}</MDXProvider>
        </Container>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        images
        categories
      }
      excerpt
    }
  }
`;
export default BlogPost;
