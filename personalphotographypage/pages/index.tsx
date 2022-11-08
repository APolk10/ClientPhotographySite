import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';

const Home: NextPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/hello')
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  })
  return (
    <div className={styles.homeContainer}>
      {/* <h1 className={styles.title}> McMillan Photography </h1> */}
      <ImageGrid />
    </div>
  )
}

export default Home
