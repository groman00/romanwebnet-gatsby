import React, { useEffect, useState, useCallback } from 'react';
import { arrayOf } from 'prop-types';
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

const Link: React.FC<LinkItem> = ({ children, icon, root, ...props }) => (
  <a
    key={icon.symbol}
    className={styles.link}
    rel="noopener noreferrer"
    {...root}
    {...props}
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

const useScattered = () => {
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

  return { offsetX, offsetY };
};

// const initialTransforms = links.map((_, i) => 'translate3d(-100%, 100%, 0)');

export const ScatteredNavigation: React.FC = () => {
  const { offsetX, offsetY } = useScattered();
  // console.log(offsetX);
  // console.log(offsetY);
  const [className, setClassName] = useState('');
  // const [transforms, setTransforms] = useState([]);

  // useEffect(() => {
  //   setClassName(styles.animate);
  // }, []);

  // const transforms = () => {
  //   return links.map(() => {

  //   })
  // };
  return (
    <Navigation
      className={`${styles.scatteredNav} ${className}`}
      // style={{
      //   transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
      // }}
    >
      {links.map((link) => (
        <div key={link.icon.symbol} className={`${styles.linkContainer}`}>
          <Link
            {...link}
            style={{
              transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
            }}
          >
            <span>{link.root.title}</span>
          </Link>
        </div>
      ))}
    </Navigation>
  );
};

export default HorizontalNavigation;
