/* eslint-disable @next/next/no-img-element */
import styles from 'styles/imageGrid.module.css';
import * as React from 'react';
import Link from 'next/link';
import axios from 'axios';

const ImageGrid = () => {

  return (
    <div className={styles.portfolios}>
      <div className={styles.imageContainer}>
        <div>
          <h2>Family</h2>
          These are photos of families that I don&apos;t really know
        </div>
        <Link href="/FamilyPortfolio">
          <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040388/Tim%20Photography/Family/TMc-31_mvdkm1_yulv13.jpg" alt="Family Pic" />
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Link href="/WeddingsPortfolio">
          <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/Weddings/TMc-6_ds7fot_dilcaq.jpg" alt="Wedding Pic" />
        </Link>
        <div>
          <h2>Weddings</h2>
          Behold the ceremony of love
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <h2>Holidays</h2>
          Just typing stuff down here for the hell of it.
        </div>
        <img src="https://res.cloudinary.com/dbvgiuj6d/image/upload/v1668040378/Tim%20Photography/Family/TMc-59_plymrp_x7kesp.jpg" alt="Holiday Pic" />
      </div>
    </div>
  )
}

export default ImageGrid;