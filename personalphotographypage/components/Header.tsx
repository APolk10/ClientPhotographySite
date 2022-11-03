import NavBar from './NavBar'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <div>
      <div className={styles.headerBanner}>
        <h1 className={styles.title}> McMillan Photography </h1>
        <NavBar />
      </div>

    </div>
  )
}
