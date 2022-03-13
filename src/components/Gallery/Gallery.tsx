import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styles from './gallery.module.scss';

const Gallery: React.FC = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  console.log(images, styles);

  return (
    <div>
      {images.map((image, i) => (
        <GatsbyImage
          className={styles.gatsbyImage}
          key={i}
          image={getImage(image)}
          alt="testing"
        />
      ))}
    </div>
  );
};

export default Gallery;
