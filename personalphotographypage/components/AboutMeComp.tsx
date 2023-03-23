/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/home.module.css'

const AboutMeComponent: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
            <img
              id={styles.carouselImg}
              // className='d-block w-100'
              src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1676476920/Tim%20Photography/Landscape/TIM_5648-min_p1xpz3.jpg'
              alt='slide one'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1676476921/Tim%20Photography/Landscape/TIM_4355-min_xltc0z.jpg'
            alt='slide two'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1676476916/Tim%20Photography/Landscape/TIM_3907-min_firc6e.jpg'
            alt='slide three'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1676476910/Tim%20Photography/Landscape/TIM_0687-min_sdjmoj.jpg'
            alt='slide four'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1676476912/Tim%20Photography/Landscape/TIM_3462-min_krfgz2.jpg'
            alt='slide five'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.homeUnderIntroPhoto}>
        <p id={styles.homeText} className={styles.homeText}>Welcome to my page!</p>
          <p className={styles.homeText}>
            From the joyous celebrations of weddings and engagements, to the precious first moments of bringing a newborn home. The unforgettable family events and the captivating beauty of landscapes. What began as an appetite to hold on to my own family&apos;s treasured memories has now transformed into a passion I am eager to share with the rest of the world.
          </p>
          <p className={styles.homeText}>
            If you are looking for a photographer to help capture those special moments in your life, don&apos;t hesitate to reach out!
          </p>
          <div>
            <Image className={styles.headshotImage} src='https://res.cloudinary.com/dijhxevwz/image/upload/v1666906690/timHeadshot_rf9aqm.jpg' width='400px' height='400px' alt=''/>
          </div>
      </div>
    </div>
  )
}

export default AboutMeComponent;