import React, { ReactHTMLElement, PropsWithChildren, useEffect, useRef } from 'react';
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
  index = 0,
}) => {
  const el = useRef<HTMLAnchorElement>(null);
  const delay = 300 * (index + 1) ;

  useEffect(() => {
    const interval = setInterval(() => {
      el.current?.removeAttribute('style');
      clearInterval(interval);
    }, delay)
  }, [])

  return (
    <a
      ref={el}
      className={`${styles.link} bounceInLeft bounceInLeft_delay_${delay}`} {...root}
      style={{
        opacity: 0,
        transform: 'translate3d(-3000px, 0, 0)',
      }}
    >
      <Icon {...icon} />
      {children}
    </a>
  );
}

export const VerticalNavigation: React.FC = () => (
  <Navigation className={styles.verticalNav}>
    <div className={styles.verticalNavLinks}>
      <div className={styles.navLinks}>
        {links.map((link, index) => (
          <Link key={link.icon.symbol} {...link} index={index}>
            <span>{link.root.title}</span>
            <Icon className={styles.chevron} symbol="chevron" />
          </Link>
        ))}
      </div>
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
