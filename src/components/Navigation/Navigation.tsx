import React, { useEffect, useState, useCallback } from 'react';
import styles from './navigation.module.scss';
import Icon from '../Icon';
import links, { LinkItem } from './links';

const Navigation: React.FC<{ className?: string }> = ({
  children,
  className = '',
  ...props
}) => (
  <nav className={`${styles.nav} ${className}`} {...props}>
    {children}
  </nav>
);

const Link: React.FC<LinkItem> = ({ children, icon, root }) => (
  <a
    key={icon.symbol}
    className={styles.link}
    rel="noopener noreferrer"
    {...root}
  >
    <Icon {...icon} />
    {children}
  </a>
);

export const VerticalNavigation: React.FC = () => (
  <Navigation className={styles.verticalNav}>
    <div className={styles.verticalNavLinks}>
      {links.map((link) => (
        <Link key={link.icon.symbol} {...link}>
          <span>{link.root.title}</span>
          <Icon className={styles.chevron} symbol="chevron" />
        </Link>
      ))}
    </div>
  </Navigation>
);

export const HorizontalNavigation: React.FC = () => (
  <Navigation className={styles.horizontalNav}>
    {links.map((link) => (
      <Link key={link.icon.symbol} {...link} />
    ))}
  </Navigation>
);

export const ScatteredNavigation: React.FC = () => {
  const [startX, setStartX] = useState<number>();
  const [startY, setStartY] = useState<number>();
  const [clientX, setClientX] = useState<number>();
  const [clientY, setClientY] = useState<number>();
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      setStartX((x) => x ?? e.clientX);
      setStartY((y) => y ?? e.clientY);
      setClientX(e.clientX);
      setClientY(e.clientY);
    };
    document.addEventListener('mousemove', fn);

    return () => {
      document.removeEventListener('mousemove', fn);
    };
  }, []);

  useEffect(() => {
    if (startX && startY && clientX && clientY) {
      setOffsetX(startX - clientX);
      setOffsetY(startY - clientY);
    }
  }, [startX, startY, clientX, clientY]);

  // console.log(startX);
  // console.log(offset);

  return (
    <Navigation
      className={styles.scatteredNav}
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
      }}
    >
      {links.map((link) => (
        <Link key={link.icon.symbol} {...link}>
          <span>{link.root.title}</span>
        </Link>
      ))}
    </Navigation>
  );
};

export default HorizontalNavigation;
