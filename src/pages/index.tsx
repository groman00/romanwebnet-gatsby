import React from 'react';
import { SEO } from '../components';
import Header from '../components/Header';
import { VerticalNavigation } from '../components/Navigation';

const IndexPage: React.FC = () => (
  <>
    <Header logoTag="h1" />
    <VerticalNavigation />
    <main><SEO title="Home" /></main>
  </>
);

export default IndexPage;
