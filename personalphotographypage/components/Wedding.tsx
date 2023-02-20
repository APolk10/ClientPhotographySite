/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/images.module.css';
import Image from 'next/image';

interface Prop {
  gallery: any []
}

export default function Wedding({ gallery }: Prop) {
  let element = gallery.length > 0 ? true : false;

  if (element) {
    return (
      <div className={styles.imagesContainer}>
        {gallery.map((image) => <Image src={image.url} alt="Wedding photo" key={image.asset_id} width={image.width / 20} height={image.height / 20} className={styles.images}/>)}
      </div>)
  } else {
    return (
      <div>
        No photos Currently
      </div>
    )
  }
}