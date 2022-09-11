import React, { useEffect, useState } from 'react';
import * as styles from './gallery.module.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

const host = 'https://d2src2azjjzz54.cloudfront.net/static-images'

interface Props {
  files: GatsbyTypes.Maybe<GatsbyTypes.File>[]
  slug: string
}

const Gallery: React.FC<Props> = ({ files, slug }) => {
  const path = slug.split('/').slice(-2).join('');

  const imageItems = React.useMemo(() =>
    files?.map(file => {
        const imageSrc = `${host}/${path}/${file}`;
        return {
          original: imageSrc,
          thumbnail: imageSrc
        }
    }), [files])

  console.log({imageItems});

  return <ImageGallery additionalClass={styles.gallery} items={imageItems}/>
};

export default Gallery;