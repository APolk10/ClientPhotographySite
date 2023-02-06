import styles from 'styles/ImageGrid.module.css';

const ImageGrid: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.grid}>
        <img src="../starry-night.JPG" alt="Starry Night by Van Gogh"/>
        <img src="../Stańczyk.jpeg" alt="Starry Night by Van Gogh"/>
        <img src="../funeral-of-a-viking.jpg" alt="Starry Night by Van Gogh"/>
        <img src="../sunflowers.jpg" alt="Starry Night by Van Gogh"/>
        <img src="../water-lilies.jpg" alt="Starry Night by Van Gogh"/>
        <img src="../monet-bridge.jpg" alt="Starry Night by Van Gogh"/>
      </div>
    </div>
  )
}

export default ImageGrid;
