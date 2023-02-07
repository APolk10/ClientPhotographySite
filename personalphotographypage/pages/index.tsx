import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/home.module.css';
import AboutMeComponent from '../components/AboutMeComp';

const Home: NextPage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/hello')
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  })
  return (
    <div>
      <AboutMeComponent />
    </div>
  )
}

export default Home
