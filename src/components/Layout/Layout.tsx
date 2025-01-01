/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren, useEffect, useLayoutEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from "gatsby"

import Header from '../Header';
import { HorizontalNavigation, VerticalNavigation } from '../Navigation';
import Footer from '../Footer';
import * as styles from './layout.module.scss';

// const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // return <>{children}</>;
// };

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.animatedBackground}>
    <Header />
      <main>{children}</main>
      <HorizontalNavigation />
    <Footer />
  </div>
);

const Avatar = () => (
  <div className={`${styles.avatar} bounceInUp`}>
    <img src="https://avatars.githubusercontent.com/u/1498341?v=4" />
  </div>
);

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.animatedBackground}>
    <Header logoTag="h1" />
    <div className={styles.homeBody}>
      <Avatar />
      <VerticalNavigation />
    </div>
    <main>{children}</main>
  </div>
);

export default DefaultLayout;
