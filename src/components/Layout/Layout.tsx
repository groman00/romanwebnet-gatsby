/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from 'react';
// import { useStaticQuery, graphql } from "gatsby"

import Header from '../Header';
import { HorizontalNavigation, VerticalNavigation } from '../Navigation';
import Footer from '../Footer';
import * as styles from './layout.module.scss';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
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

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header />
    <main>{children}</main>
    <HorizontalNavigation />
    <Footer />
  </Layout>
);

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.animatedBackground}>
    <Header logoTag="h1" />
    <VerticalNavigation />
    <main>{children}</main>
  </div>
);

export default DefaultLayout;
