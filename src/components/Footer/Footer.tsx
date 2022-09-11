import React from 'react';
import * as styles from './footer.module.scss';
import Panel from '../Panel';
import Container from '../Container';

const Footer: React.FC = () => (
  <Panel theme="dark">
    <Container element="footer" className={styles.footer}>
      {new Date().getFullYear()} Romanwebnet.com. All rights reserved.
      <button
        type="button"
        className={styles.anchor}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.scroll(0, 0);
          return false;
        }}
      >
        Back to top
      </button>
    </Container>
  </Panel>
);

export default Footer;
