import React from 'react';
import * as styles from './heading.module.scss';

interface Props {
  text: string;
  element: React.ElementType;
  theme?: string;
}

const Heading: React.FC<Props> = ({ text, element, theme = 'light' }) => {
  const Tag = element;
  return <Tag className={`${styles.root} ${styles[theme]}`}>{text}</Tag>;
};

export default Heading;
