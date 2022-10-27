import NavBar from './NavBar'
import styles from '../styles/header.module.css'

function Header() {
  return (
    <div>
      <div className={styles.headerBanner}>
        McMillan Photography
        <NavBar />
      </div>

    </div>
  )
}

export default Header;