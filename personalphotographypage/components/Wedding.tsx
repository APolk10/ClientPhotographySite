/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/images.module.css';

interface Prop {
  gallery: any[]
}

export default function Wedding({ gallery }: Prop) {

  if (gallery) {
    return (
      <div className={styles.imagesContainer}>
        {gallery.map((image, index) => <img src={image.url} alt="Wedding Photo" key={index} className={styles.images}/>)}
      </div>)
  } else {
    return (
      <div>
        No photos Currently
      </div>
    )
  }
}