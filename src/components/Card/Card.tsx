import React, { PropsWithChildren } from 'react';
import * as styles from './card.module.scss';

interface Props {
  cta: string;
  description: string;
  link: string;
  subtext?: string;
  title: string;
  external?: boolean;
}

export const CardWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

const Card: React.FC<Props> = ({
  cta,
  description,
  link,
  subtext,
  title,
  external = false,
}) => (
  <CardWrapper>
    <div className={styles.cardLeft}>
      <h4 className="title">
        {link ? (
          <a
            target={external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            href={link}
            title={title}
          >
            {title}
          </a>
        ) : (
          <>{ title }</>
        )}
      </h4>
      <p className={styles.description}>{description}</p>
      {subtext && <h5 className={`${styles.subtext}`}>{subtext}</h5>}
    </div>
    <h5 className={styles.cardRight}>
      <a
        className={styles.cta}
        target={external ? '_blank' : '_self'}
        rel="noopener noreferrer"
        href={link}
        title={cta}
      >
        {cta}
      </a>
    </h5>
  </CardWrapper>
);

export default Card;
