import React from 'react';
import styles from './icon.module.scss';

const Icon: React.FC<{ symbol: string }> = ({ symbol, ...props }) => (
  <svg className={`${styles.root} ${styles[symbol]} ${props.className}`}>
    <use xlinkHref={`#icon-${symbol}`} />
  </svg>
);

export default Icon;