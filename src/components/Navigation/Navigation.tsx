import React, { PropsWithChildren } from 'react';
import * as styles from './navigation.module.scss';
import Icon from '../Icon';
import links, { LinkItem, socialLinks } from './links';

const Navigation: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => <nav className={`${styles.nav} ${className}`}>{children}</nav>;

const Link: React.FC<PropsWithChildren<LinkItem>> = ({
  children,
  icon,
  root,
}) => (
  <a className={styles.link} {...root}>
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
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a rel="noopener" {...link.root}>
            <Icon {...link.icon} />
          </a>
        ))}
      </div>
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

export default HorizontalNavigation;
