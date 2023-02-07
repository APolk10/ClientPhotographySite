import Image from 'next/image'
import styles from '../styles/home.module.css'

const AboutMeComponent: React.FC = () => {

  return (
    <div className={styles.homeContainer}>
      <div>
        <img
          className={styles.homeImage}
          alt='whoops'
          src='https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040388/Tim%20Photography/TMc-30_f7ftvb_of4qct.jpg'
        ></img>
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