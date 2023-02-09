import type { NextPage } from 'next';
import { useMemo } from 'react';
import axios from 'axios';
import AboutMeComponent from '../components/AboutMeComp';

const Home: NextPage = () => {

  const images = useMemo(() => axios.get('http://localhost:3000/api/pictureAPI'), []);

  return (
    <div>
      <AboutMeComponent />
    </div>
  )
}

export default Home
