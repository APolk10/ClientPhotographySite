import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/aboutMe.module.css'
import Header from '../components/Header'


const AboutMe: NextPage = () => {
  return (
    <div>
      <div className={styles.data}>
        <p>Here be Tim. Painter of Pictures on the canvas we call camera.</p>
      <div className={styles.headshot}>
        <Image src='https://res.cloudinary.com/dijhxevwz/image/upload/v1666906690/timHeadshot_rf9aqm.jpg' width='400px' height='400px' alt=''/>
      </div>
      </div>
    </div>
  )
}

export default AboutMe;