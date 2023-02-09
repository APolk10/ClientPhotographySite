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
              src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040388/Tim%20Photography/Weddings/TMc-30_f7ftvb_of4qct.jpg'
              alt='slide one'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040386/Tim%20Photography/Weddings/TMc-41_w5uojv_lmhe9l.jpg'
            alt='slide two'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040385/Tim%20Photography/Weddings/TMc-4_h751dp_gbaomu.jpg'
            alt='slide three'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/Weddings/TMc-57_hn3ray_cx20hm.jpg'
            alt='slide four'
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
            id={styles.carouselImg}
            // className='d-block w-100'
            src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040394/Tim%20Photography/Weddings/TMc-8_eesrzf_xst1bk.jpg'
            alt='slide five'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.homeUnderIntroPhoto}>
        <p id={styles.homeText} className={styles.homeText}>Welcome to my page!</p>
          <p className={styles.homeText}>
            Among my friends I have always been the person to hold the camera. What started out as a hobby has quickly grown into something more. People want to hold on to their treasured memories, and I have been privilidged enough to help them. Taking photos of these happy moments and beautiful scenes brings me great joy and I am excited to share this passion with you. If you have any questions for me please reach out!
          </p>
          <div>
            <Image className={styles.headshotImage} src='https://res.cloudinary.com/dijhxevwz/image/upload/v1666906690/timHeadshot_rf9aqm.jpg' width='400px' height='400px' alt=''/>
          </div>
      </div>
    </div>
  )
}

export default AboutMeComponent;