import React, { useEffect, useState } from 'react';
import * as styles from './gallery.module.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { getImage } from 'gatsby-plugin-image';

interface Props {
  files: GatsbyTypes.Maybe<GatsbyTypes.File>[]
}

const Gallery: React.FC<Props> = ({ files }) => {
  console.log(files.map(i => i));
  const [imageItems, setImageItems] = useState<ReactImageGalleryItem[]>([])

  useEffect(() => {
    setImageItems(files.map(file => {
      const image = getImage(file);
      return {
        original: image.images.fallback.src,
        thumbnail: image.images.fallback.src,
      }
  }))}, [files]);

  return <ImageGallery additionalClass={styles.gallery} items={imageItems}/>
};

export default Gallery;
