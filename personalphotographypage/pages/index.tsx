import type { NextPage } from 'next';
import axios from 'axios';
import AboutMeComponent from '../components/AboutMeComp';

const Home: NextPage = () => {

  return (
    <div>
      <AboutMeComponent />
    </div>
  )
}

export default Home
