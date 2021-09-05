import React from 'react';
import { Layout, SEO, Resume, Repos } from '../../components';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Resume />
    <Repos />
  </Layout>
);

export default AboutPage;
