import React, { PropsWithChildren } from 'react';
import * as styles from './container.module.scss';

interface Props {
  className?: string;
  element?: React.ElementType;
}

const Container: React.FC<PropsWithChildren & Props> = ({
  children,
  className = '',
  element = 'div',
}) => {
  const Element = element;
  return (
    <Element className={`${styles.root} ${className}`}>{children}</Element>
  );
};

export default Container;
