import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import styles from "./resMenu.module.css";
import { useParams } from "react-router-dom";

export default function RestaurantMenu() {
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  async function fetchMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json?.data);
  }

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <div className="resDetails">
        <h1>{name}</h1>
        <span className={styles.extraDetails}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.rating}>{avgRating}</span> &bull;
          <span className={styles.cost}> {costForTwoMessage}</span>
        </span>
        <p className={styles.cuisine}>{cuisines?.join(", ")}</p>
      </div>
      <h4>Menu</h4>
      <div className="menu items">
        <div>
          <h4>
            {title}({itemCards?.length})
          </h4>
        </div>
      </div>
    </div>
  );
}
