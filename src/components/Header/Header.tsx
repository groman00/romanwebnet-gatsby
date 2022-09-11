import React from 'react';
import * as styles from './header.module.scss';

type HeaderProps = {
  logoTag?: keyof JSX.IntrinsicElements;
};

const Header: React.FC<HeaderProps> = ({ logoTag: LogoTag = 'h3' }) => {
  return (
    <header>
      <div className={styles.logo}>
        <LogoTag className={`h5 ${styles.logoText}`}>
          <a className="light" href="/" title="home">
            Romanwebnet.com
          </a>
        </LogoTag>
      </div>
    </header>
  );
};

export default Header;
