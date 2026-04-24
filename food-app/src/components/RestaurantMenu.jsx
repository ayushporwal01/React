import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import styles from "./resMenu.module.css";

export default function RestaurantMenu() {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  async function fetchMenu() {
    const data = await fetch(MENU_URL);
    const json = await data.json();

    console.log(json);
    setResInfo(json?.data);
  }

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <span className={styles.extraDetails}>
        <span className={styles.starIcon}>&#9733;</span>
        <span className={styles.rating}>{avgRating}</span> &bull;
        <span className={styles.cost}> {costForTwoMessage}</span>
      </span>
      <p className={styles.cuisine}>{cuisines.join(", ")}</p>
    </div>
  );
}
