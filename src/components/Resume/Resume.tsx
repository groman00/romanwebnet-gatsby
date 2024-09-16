import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './resume.module.scss';
import Panel from '../Panel';
import Container from '../Container';
import Heading from '../Heading';

const Resume: React.FC = () => {
  const {
    allContentYaml: {
      edges: [
        {
          node: { items: resumeItems, title: resumeTitle },
        },
      ],
    },
  } = useStaticQuery<GatsbyTypes.JobsQueryQuery>(graphql`
    query JobsQuery {
      allContentYaml(filter: { contentId: { eq: "jobs" } }) {
        edges {
          node {
            items {
              title
              company
              location
              dateRange
              blurb
            }
            title
          }
        }
      }
    }
  `);
  return (
    <Panel>
      <Container className="bg-white">
        <Heading element="h1" text="About" />
        <p className={styles.bio}>
          Hello, my name is Greg Roman and I&#39;m a software engineer based in
          Jersey City, NJ. I have experience building modern, high performing
          websites and applications for nationally recognized brands. If you are
          looking for a new website or app for your business, please contact me
          at{' '}
          <a title="Email" href="mailto:gregorymichaelroman@gmail.com">
            gregorymichaelroman@gmail.com
          </a>
          .
        </p>
        <Heading element="h2" text="Skills" />
        <div className={`${styles.skills}`}>
          <div className={`${styles.skillsRow}`}>
            <h3 className="font-bold">Languages</h3>
            <p>Javascript / Typescript, Python, Kotlin, PHP, HTML, CSS</p>
          </div>
          <div className={`${styles.skillsRow}`}>
            <h3 className="font-bold">Front-End</h3>
            <p>
              React, Redux / Redux Saga, Webpack, Styled Components, Storybook,
              Sass, XState, Vue, Material UI, Bootstrap, A11y, React Testing
              Library, Design Systems
            </p>
          </div>
          <div className={`${styles.skillsRow}`}>
            <h3 className="font-bold">Full-Stack</h3>
            Node, GraphQL / Apollo, REST, ESLint, Docker, K8s, Domain Driven
            Design
          </div>
          <div className={`${styles.skillsRow}`}>
            <h3 className="font-bold">Database</h3>
            MySQL, PostgreSQL, MongoDB, DynamoDB
          </div>
          <div className={`${styles.skillsRow}`}>
            <h3 className="font-bold">Design</h3>
            Sketch, Photoshop, After Effects, Illustrator
          </div>
        </div>
        <Heading element="h2" text={resumeTitle} />
        <div className={styles.experience}>
          {resumeItems.map(
            ({
              id,
              company,
              title,
              location,
              blurb,
              dateRange,
            }: Record<string, string>) => (
              <div className={styles.experienceItem} key={id}>
                <div className={styles.experienceItemLeft}>
                  <h4>{title}</h4>
                  <h5>
                    {company} - {location}
                  </h5>
                  <p>{blurb}</p>
                </div>
                <div className={styles.experienceItemRight}>{dateRange}</div>
              </div>
            )
          )}
        </div>
      </Container>
    </Panel>
  );
};

export default Resume;
