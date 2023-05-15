/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '../styles/images.module.css';

interface Prop {
  gallery: any[]
}

export default function Family({ gallery }: Prop) {

  if (gallery) {
    return (
      <div className={styles.imagesContainer}>
        {gallery.map((image, index) => <img src={image.url} alt="Family photo" key={index} className={styles.images}/>)}
      </div>)
  } else {
    return (
      <div>
        No photos Currently
      </div>
    )
  }
}
