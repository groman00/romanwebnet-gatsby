import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Container, SEO, Gallery, CodeExample } from '@components';
import * as styles from './blogPost.module.scss';
import { MDXProvider } from '@mdx-js/react';

interface BreadCrumbProps {
  title: string;
  category: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title, category }) => (
  <div className={styles.breadcrumb}>
    {category && (
      <>
        <a href={`/${category.toLowerCase()}`}>{category}</a>
        <span className={styles.breadcrumbSpacer}>{'>'}</span>
      </>
    )}
    <span>{title}</span>
  </div>
);

interface BlogPostProps {
  data: { markdownRemark: GatsbyTypes.MarkdownRemark };
}

const BlogPost: React.FC<BlogPostProps> = ({ data, children }) => {
  // console.log({ props });
  // return <>'foo'</>;
  const post = data.mdx;

  const { title, images } = post.frontmatter!;
  const [rootCategory] = post.frontmatter?.categories ?? [];

  console.log({ title });

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
          {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          {/* {children} */}
          <MDXProvider components={{ CodeExample }}>{children}</MDXProvider>
        </Container>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      # html
      # body
      fields {
        slug
      }
      frontmatter {
        title
        # images
        categories
        # {
        #   childImageSharp {
        #     gatsbyImageData(
        #       layout: CONSTRAINED
        #       # width: 200
        #       # placeholder: BLURRED
        #       # formats: [AUTO, WEBP, AVIF]
        #     )
        #   }
        # }
      }
      excerpt
    }
  }
`;
export default BlogPost;
