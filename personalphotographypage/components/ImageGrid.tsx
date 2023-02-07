import styles from 'styles/ImageGrid.module.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { resolve } from 'path';
import Image from 'next/image';
import { assert } from 'console';

interface ImageProps {
  images: any []
}

const ImageGrid = () => {
  const [gallery, setGallery]: any [] = useState([]);
  const [subset, setSubset]: any[] = useState([])

  useEffect(() => {
    let flag = false;
    axios.get('http://localhost:3000/api/hello')
      .then((res: AxiosResponse) => {
        setGallery(res.data.resources);
        resolve();
      })
      .catch((error) => {
        console.error(error);
        flag = true;
      })
    if (!flag) {
      setSubset(gallery.slice(0,10))
    };
  }, []);

  return (
    <div className={styles.portfolios}>
      <div className={styles.imageContainer}>
        <div>
          <h2>Family</h2>
          These are photos of families that I don't really know
        </div>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040388/Tim%20Photography/TMc-31_mvdkm1_yulv13.jpg" alt="Family Pic" />
      </div>
      <div className={styles.imageContainer}>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/TMc-6_ds7fot_dilcaq.jpg" alt="Wedding Pic" />
        <div>
          <h2>Weddings</h2>
          Behold the ceremony of love
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <h2>Holidays</h2>
          Just typing stuff down here for the hell of it.
        </div>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/TMc-59_plymrp_x7kesp.jpg" alt="Wedding Pic" />
      </div>

    </div>
  )
}

export default ImageGrid;