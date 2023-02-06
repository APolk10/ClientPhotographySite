import type { NextPage } from 'next'
import styles from '../styles/aboutMe.module.css'
import AboutMeComponent from '../components/AboutMeComp';

const AboutMe: NextPage = () => {
  return (

      <div className={styles.data}>
        <AboutMeComponent />
      </div>

  )
}

export default AboutMe;