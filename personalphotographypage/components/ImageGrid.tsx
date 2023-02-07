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
    <div>
      {subset.map((image: any) =>
        <Image src={image.url} layout="responsive" width={100} height={100} alt="Image" key={image.asset_id}/>)
      }
    </div>
    )

}

export default ImageGrid;