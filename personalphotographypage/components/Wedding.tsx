import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { resolve } from 'path';
import Image from 'next/image';
import styles from '../styles/images.module.css';


const Family = () => {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/pictureAPI')
      .then((res: AxiosResponse) => {
        let pics = res.data.resources.filter((image: any) => image.folder === 'Tim Photography/Weddings');
        setGallery(pics)
        resolve();
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    gallery.length > 0 ?
    <div className={styles.imagesContainer}>
      {gallery.map((image: any) => {
        return <Image src={image.url} alt="Wedding/Engagement photo" key={image.asset_id} height={100} width={100} className={styles.image}/>
      })}
    </div>
    :
    <div>No Photos Currently Available</div>

  )
}

export default Family;