import React from 'react';
import { HomeLayout as Layout, SEO } from '../components';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    {/*
    https://www.gatsbyjs.org/docs/adding-analytics/
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112401659-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-112401659-1');
    </script>
    */}
  </Layout>
);

export default IndexPage;
