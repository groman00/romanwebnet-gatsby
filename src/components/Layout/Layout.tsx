/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
import Header from '../Header';
import {
  HorizontalNavigation,
  ScatteredNavigation,
  VerticalNavigation,
} from '../Navigation';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return <>{children}</>;
};

const DefaultLayout: React.FC = ({ children }) => (
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
    {/* <VerticalNavigation /> */}
    <ScatteredNavigation />
    <main>{children}</main>
  </Layout>
);

export default DefaultLayout;
