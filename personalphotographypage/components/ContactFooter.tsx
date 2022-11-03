import styles from '../styles/contactFooter.module.css';
import Link from 'next/link';

export default function ContactFooter() {
  return (
    <div className={styles.bar}>
      <p>Mission statement/Short tidbit about Tims work</p>
      <p>copyright @2022 by business name here</p>
      <Link href='/Contact'>Contact Me</Link>
    </div>
  )
}
