import React from 'react';
import * as styles from './breadCrumb.module.scss';

interface Props {
  title: string;
  category: string;
}

const BreadCrumb: React.FC<Props> = ({ title, category }) => (
  <div className={styles.breadcrumb}>
    {category && (
      <>
        <a href={`/${category.toLowerCase()}`}>{category}</a>
        <span className={styles.breadcrumbSpacer}>{'>'}</span>
      </>
    )}
    <span>{title}</span>
  </div>
);

export default BreadCrumb;
