/* eslint-disable @next/next/no-img-element */
import styles from 'styles/imageGrid.module.css';
import * as React from 'react';
import Link from 'next/link';

const ImageGrid = () => {

  return (
    <div className={styles.portfolios}>
      <div className={styles.imageContainer}>
        <div className={styles.gridContainer}>
          <h2>Family</h2>
        </div>
        <Link href="/FamilyPortfolio">
          <img className={styles.portfolioImage} src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040388/Tim%20Photography/Family/TMc-31_mvdkm1_yulv13.jpg" alt="Family Pic" />
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Link href="/WeddingsPortfolio">
          <img className={styles.portfolioImage} src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/Weddings/TMc-6_ds7fot_dilcaq.jpg" alt="Wedding Pic" />
        </Link>
        <div className={styles.gridContainer}>
          <h2>Weddings</h2>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.gridContainer}>
          <h2>Special Moments</h2>
        </div>
        <img className={styles.portfolioImage} src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/Family/TMc-59_plymrp_x7kesp.jpg" alt="Holiday Pic" />
      </div>
    </div>
  )
}

export default ImageGrid;