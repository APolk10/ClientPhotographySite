import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}> Tim&apos;s Photography </h1>
      <ImageGrid />
    </div>
  )
}

export default Home
