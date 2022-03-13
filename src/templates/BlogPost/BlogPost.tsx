import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Container, SEO, Gallery } from '@components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  frontmatter: {
    title: string;
  };
  excerpt: string;
  html: string;
}

interface BlogPostProps {
  data: { markdownRemark: Post };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  const { title, images } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} />
      <article className={styles.article}>
        <Container>
          <BreadCrumb title={title} />
          <h1 className={styles.title}>{title}</h1>
          <Gallery images={images} />
          {/* <GatsbyImage image={getImage(featuredImage)} alt="testing" /> */}
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
        images {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              # width: 200
              # placeholder: BLURRED
              # formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      excerpt
    }
  }
`;
export default BlogPost;
