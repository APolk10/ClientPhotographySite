import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import { resolve } from 'path';

const Home: NextPage = () => {

  return (
    <div className={styles.homeContainer}>
      {/* <h1 className={styles.title}> McMillan Photography </h1> */}
      <ImageGrid />
    </div>
  )
}

export default Home
