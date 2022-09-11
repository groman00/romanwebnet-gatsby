import React from 'react';
import * as styles from './icon.module.scss';

interface Props {
  symbol: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ className, symbol }) => (
  <svg className={`${styles.root} ${styles[symbol]} ${className}`}>
    <use xlinkHref={`#icon-${symbol}`} />
  </svg>
);

export default Icon;
