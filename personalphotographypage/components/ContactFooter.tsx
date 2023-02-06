import styles from '../styles/contactFooter.module.css';
import Link from 'next/link';

const ContactFooter: React.FC = () => {
  return (
    <div className={styles.bar}>
      <p>Mission statement/Short tidbit about Tims work</p>
      <p>copyright @2022 by business name here</p>
      <Link href='/Contact'>Contact Me</Link>
    </div>
  )
}

export default ContactFooter;

