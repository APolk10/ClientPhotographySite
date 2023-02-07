import NavBar from './NavBar'
import styles from '../styles/header.module.css'
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [mobileView, setMobileView] = useState(false);
  const titleStyle = {
    paddingLeft:  mobileView ? '8vw' : '2vw'
  }

  useEffect(() => {
    if (window.innerWidth < 400) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerBanner}>
        <h1 className={styles.title} style={titleStyle}> McMillan Photography </h1>
        <NavBar />
      </div>

    </div>
  )
}

export default Header;

