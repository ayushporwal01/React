import styles from "./resCard.module.css";

export default function RestaurantCard() {
  return (
    <div className={styles.resCard}>
      <div>
        <img src="src/assets/res-img/1.jpg" alt="Pizza Hut Image" />
      </div>
      <div className={styles.resDetails}>
        <h1 className={styles.resName}>Restaurant Name</h1>

        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>Rating</span> &bull;
          <span className={styles.deliveryTime}>Dilivery Time</span>
        </span>

        <h3 className={styles.cuisine}>Cuisine</h3>
        <h3 className={styles.location}>Location</h3>
      </div>
    </div>
  );
}
