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
    <div>
      <div className={styles.homeContainer}>
        <p className={styles.homeText}>
          Welcome to my page!
          Among my friends I have always been the one to hold the camera. What started out as a hobby has quickly grown into something more. People want to hold on to their treasured memories, and I have been priviledged enough to help them. Taking photos of these happy moments and beautiful scenes brings me great joy and I am excited to share this passion with you. If you have any questions for me please reach out!
        </p>
        <div>
          <Image className={styles.headshotPhoto} src='https://res.cloudinary.com/dijhxevwz/image/upload/v1666906690/timHeadshot_rf9aqm.jpg' width={300} height={300} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Home
