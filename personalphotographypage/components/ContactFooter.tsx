import styles from '../styles/contactFooter.module.css';
import Link from 'next/link';

const ContactFooter: React.FC = () => {
  return (
    <div className={styles.bar}>
      <img src='https://cdn.pixabay.com/photo/2017/10/19/17/56/camera-2868622_960_720.png' width='60'></img>
      <Link href='/Contact'>Contact Me</Link>
    </div>
  )
}

export default ContactFooter;

