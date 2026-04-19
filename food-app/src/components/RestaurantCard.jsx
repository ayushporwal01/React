import styles from "./resCard.module.css";

export default function RestaurantCard({resData, resName, rating, deliveryTime, cuisine, location}) {
  return (
    <div className={styles.resCard}>
      <div className={styles.resImage}>
        <img src="src/assets/res-img/1.jpg" alt="Pizza Hut Image" />
      </div>
      <div className={styles.resDetails}>
        <h1 className={styles.resName}>{resData.name}</h1>

        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>{resData.avgRating}</span> &bull;
          <span className={styles.deliveryTime}>{resData.deliveryTime}</span>
        </span>
        
        <div className={styles.moreDetails}>
            <p className={styles.cuisine}>{resData.cuisines}</p>    
            <p className={styles.location}>{resData.areaName}</p>
        </div>
      </div>
    </div>
  );
}
