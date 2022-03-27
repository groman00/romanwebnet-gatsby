import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styles from './gallery.module.scss';

const Gallery: React.FC = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeFunction = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', closeFunction);

    return () => {
      document.removeEventListener('keydown', closeFunction);
    };
  }, []);

  return isOpen ? (
    <div className={styles.gallery}>
      <div
        className={styles.galleryWrapper}
        style={{
          transform: `translate3d(-${imageIndex * 100}vw, 0, 0)`,
        }}
      >
        {images.map((image: any, i: number) => (
          <GatsbyImage
            className={styles.gatsbyImage}
            key={i}
            image={getImage(image)}
            alt="testing"
            objectFit="contain"
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.previousButton}
        onClick={() =>
          setImageIndex((index) => {
            if (index === 0) {
              return images.length - 1;
            }
            return index - 1;
          })
        }
      >
        Previous
      </button>
      <button
        type="button"
        className={styles.nextButton}
        onClick={() =>
          setImageIndex((index) => {
            if (index === images.length - 1) {
              return 0;
            }
            return index + 1;
          })
        }
      >
        Next
      </button>
      <button
        className={styles.closeButton}
        type="button"
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
    </div>
  ) : (
    <button type="button" onClick={() => setIsOpen(true)}>
      Open
    </button>
  );
};

export default Gallery;
