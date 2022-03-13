import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styles from './gallery.module.scss';

const Gallery: React.FC = ({ images }) => {
  const [imageIndex, setImageIndex] = React.useState(0);

  if (images.length === 0) {
    return null;
  }

  console.log(images, styles);

  return (
    <div className={styles.gallery}>
      <div
        className={styles.galleryWrapper}
        style={{
          transform: `translate3d(-${imageIndex * 100}vw, 0, 0)`,
        }}
      >
        {images.map((image, i) => (
          <GatsbyImage
            className={styles.gatsbyImage}
            key={i}
            image={getImage(image)}
            alt="testing"
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.button}
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
