/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PropsWithChildren } from 'react';
import Header from '../Header';
import { HorizontalNavigation } from '../Navigation';
import Footer from '../Footer';

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <HorizontalNavigation />
    <Footer />
  </>
);

export default DefaultLayout;
