import styles from "./resCard.module.css";

export default function RestaurantCard({ resData }) {
  const { name, avgRating, cuisines, areaName, sla } = resData?.info;

  const deliveryTime = sla?.deliveryTime;

  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const id = resData.info.cloudinaryImageId;

  return (
    <div className={styles.resCard}>
      <div className={styles.resImage}>
        <img src={url + id} alt={name} />
      </div>
      <div className={styles.resDetails}>
        <h1 className={styles.resName}>{name}</h1>

        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>{avgRating}</span> &bull;
          <span className={styles.deliveryTime}>{deliveryTime} mins</span>
        </span>

        <div className={styles.moreDetails}>
          <p className={styles.cuisine}>{cuisines.join(", ")}</p>
          <p className={styles.location}>{areaName}</p>
        </div>
      </div>
    </div>
  );
}
