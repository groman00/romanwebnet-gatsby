import React from 'react';
import * as styles from './businessCard.module.scss';
import Icon from '../Icon';

const BusinessCard: React.FC = () => (
  <div className={styles.root}>
    <div className={styles.heading} />
    <h6 className={styles.contact}>Jersey City, NJ</h6>
    <div className={styles.arrow}>
      <Icon className="bounce" symbol="chevron-down" />
    </div>
  </div>
);

export default BusinessCard;
