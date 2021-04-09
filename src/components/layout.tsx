/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Header from './Header';
import { HorizontalNavigation, VerticalNavigation } from './Navigation';
import Footer from './Footer';
import '../scss/main.scss';

const Layout: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const DefaultLayout: React.FC = ({ children }) => (
  <Layout>
    <Header />
    <main>{children}</main>
    <HorizontalNavigation />
    <Footer />
  </Layout>
);

export const HomeLayout: React.FC = ({ children }) => (
  <Layout>
    <Header logoTag="h1" />
    <VerticalNavigation />
    <main>{children}</main>
  </Layout>
);
