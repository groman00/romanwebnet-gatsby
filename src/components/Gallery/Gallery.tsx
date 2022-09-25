import React, { useEffect, useState } from 'react';
import * as styles from './gallery.module.scss';

const host = 'https://d2src2azjjzz54.cloudfront.net/static-images'

interface Props {
  files: GatsbyTypes.Maybe<GatsbyTypes.File>[]
  slug: string
  title: string
}

const Gallery: React.FC<Props> = ({ files, slug, title }) => {
  const path = slug.split('/').slice(-2).join('');
  return (
    <section className={styles.gallery}>
      <div className={styles.scroller}>
        { files?.map((file, index) => (
          <div className={styles.item}>
            <input
              type="radio"
              id={`img-${index}`}
              name="gallery"
              className={styles.selector}
              defaultChecked={index === 0}
            />
            <img
              className={styles.image}
              src={`${host}/${path}/${file}`}
              alt={`${title} gallery item ${index + 1}`}
              loading="lazy"
            />
            <label
              htmlFor={`img-${index}`}
              className={styles.thumbnail}>
                <img
                  src={`${host}/${path}/thumbnails/${file}`}
                  alt={`${title} gallery item thumbnail ${index + 1}`}
                />
            </label>
          </div>
        )) }
      </div>
    </section>
  )
};

export default Gallery;