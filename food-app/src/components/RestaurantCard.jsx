import styles from "./resCard.module.css";
import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({ resData }) {
  const { name, avgRating, cuisines, areaName, costForTwo, sla } = resData?.info;

  const deliveryTime = sla?.slaString;

  const id = resData?.info?.cloudinaryImageId;

  return (
    <div className={styles.resCard}>
      <div className={styles.resImage}>
        <img src={CDN_URL + id} alt={name} />
      </div>
      <div className={styles.resDetails}>
        <h1 className={styles.resName}>{name}</h1>

        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>{avgRating}</span> &bull;
          <span className={styles.deliveryTime}>{deliveryTime}</span>
        </span>

        <div className={styles.moreDetails}>
          <p className={styles.cuisine}>{cuisines.join(", ")}</p>
          <p className={styles.costForTwo}>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
}
