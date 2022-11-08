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
    axios.get('https://866426881326464:LFyzvwd3tVNW9MjLdMDxXhxe1Oc@api.cloudinary.com/v1_1/dijhxevwz/resources/image?max_results=100')
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
