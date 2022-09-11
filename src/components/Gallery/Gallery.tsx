import React, { useEffect, useState } from 'react';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import * as styles from './gallery.module.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

interface Props {
  imageItems: ReactImageGalleryItem[]
}
const Gallery: React.FC<Props> = ({ imageItems }) => {
  console.log(imageItems)
  return <ImageGallery items={imageItems}/>
};

export default Gallery;
