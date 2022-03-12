import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './resume.module.scss';
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
    <Panel theme="white">
      <Container>
        <Heading element="h1" text="About" />
        <p className={styles.bio}>
          Hello, my name is Greg Roman and I&#39;m a software engineer based in
          Jersey City, NJ. I have years of experience building modern, high
          performing websites and applications for nationally recognized brands.
          If you are looking for a new website or app for your business, please
          contact me at{' '}
          <a title="Email" href="mailto:gregorymichaelroman@gmail.com">
            gregorymichaelroman@gmail.com
          </a>{' '}
          or follow me on Twitter{' '}
          <a
            href="https://twitter.com/romanwebnet"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            @romanwebnet
          </a>
          .
        </p>
        <Heading element="h2" text="Skills" />
        <div className={`${styles.skills}`}>
          <div className={`${styles.skillsColumn}`}>
            <h3 className="font-bold">Languages</h3>
            <ul>
              <li>JavaScript / ES5 / ES6</li>
              <li>CSS / Sass / Less</li>
              <li>HTML</li>
              <li>PHP</li>
              <li>BrightScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="font-bold">Frameworks</h3>
            <ul>
              <li>React / React Native</li>
              <li>Vue</li>
              <li>AdonisJS</li>
              <li>Laravel</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="font-bold">Tools</h3>
            <ul>
              <li>Git</li>
              <li>npm / yarn</li>
              <li>Webpack / Gulp / Grunt</li>
              <li>GraphQL</li>
              <li>Redux / Vuex</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="font-bold">Design</h3>
            <ul>
              <li>Sketch</li>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Illustrator</li>
            </ul>
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
                  <h5 className={styles.italic}>
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
