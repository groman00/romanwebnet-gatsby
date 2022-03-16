import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styles from './gallery.module.scss';

const Gallery: React.FC = ({ images }) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  if (images.length === 0) {
    return null;
  }

  return (
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
    </div>
  );
};

export default Gallery;
