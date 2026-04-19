import styles from "./resCard.module.css";

export default function RestaurantCard({resName, rating, deliveryTime, cuisine, location}) {
  return (
    <div className={styles.resCard}>
      <div className={styles.resImage}>
        <img src="src/assets/res-img/1.jpg" alt="Pizza Hut Image" />
      </div>
      <div className={styles.resDetails}>
        <h1 className={styles.resName}>{resName}</h1>

        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>{rating}</span> &bull;
          <span className={styles.deliveryTime}>{deliveryTime}</span>
        </span>
        
        <div className={styles.moreDetails}>
            <p className={styles.cuisine}>{cuisine}</p>    
            <p className={styles.location}>{location}</p>
        </div>
      </div>
    </div>
  );
}
