import Image from 'next/image'
import styles from '../styles/aboutMe.module.css'

const AboutMeComponent: React.FC = () => {

  return (
    <div>
      <p className={styles.text}>
        Welcome to my page!
        Among my friends I have always been the person to hold the camera. What started out as a hobby has quickly grown into something more. People want to hold on to their treasured memories, and I have been privilidged enough to help them. Taking photos of these happy moments and beautiful scenes brings me great joy and I am excited to share this passion with you. If you have any questions for me please reach out!
      </p>
      <div>
        <Image className={styles.headshotImage} src='https://res.cloudinary.com/dijhxevwz/image/upload/v1666906690/timHeadshot_rf9aqm.jpg' width='400px' height='400px' alt=''/>
      </div>
    </div>
  )
}

export default AboutMeComponent;