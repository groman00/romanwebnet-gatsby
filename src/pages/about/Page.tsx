import React from 'react';
import { DefaultLayout as Layout } from '../../components/layout';
import SEO from '../../components/seo';
import Resume from '../../components/Resume';
import Repos from '../../components/Repos';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
    <Repos />
  </Layout>
);

export default AboutPage;
