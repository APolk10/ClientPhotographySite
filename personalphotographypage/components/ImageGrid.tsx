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

  console.log(subset)

  return (
    <div>
      {subset.map((image: any) =>
        <div key={image.asset_id}>
          <img src={image.url} alt="Tim's Pic"  />
        </div>
      )}
    </div>
  )
}

export default ImageGrid;