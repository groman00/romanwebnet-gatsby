import React from 'react';
import styles from './navigation.module.scss';
import Icon from '../Icon';
import links, { LinkItem } from './links';

const Navigation: React.FC<{ className?: string }> = ({
  children,
  className = '',
}) => <nav className={`${styles.nav} ${className}`}>{children}</nav>;

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

export const ScatteredNavigation: React.FC = () => (
  <Navigation className={styles.scatteredNav}>
    {links.map((link) => (
      <Link key={link.icon.symbol} {...link}>
        <span>{link.root.title}</span>
      </Link>
    ))}
  </Navigation>
);

export default HorizontalNavigation;
