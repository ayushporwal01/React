import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import styles from "./resMenu.module.css";
import { useParams } from "react-router-dom";

export default function RestaurantMenu() {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  async function fetchMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json?.data);
  }

  if (resInfo === null) return <Shimmer />;

  const categoryCards = resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards;

  const cardsWithTitle = categoryCards.filter(
    (card) => card?.card?.card?.title,
  );

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    infoCard?.card?.card?.info || {};

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className="menuDetails">
          <h1>{name}</h1>

          <span className={styles.extraDetails}>
            <span className={styles.starIcon}>&#9733;</span>
            <span className={styles.rating}>{avgRating}</span> &bull;
            <span className={styles.cost}> {costForTwoMessage}</span>
          </span>

          <p className={styles.cuisine}>{cuisines?.join(", ")}</p>
        </div>

        <h4 className={styles.menuText}>Menu</h4>

        <div className={styles.menuItems}>
          {cardsWithTitle?.map((section, index) => {
            const { title, itemCards } = section?.card?.card;

            return (
              <div key={index} className="itemContainer">
                <h4 className="itemCategory">
                  {title} ({itemCards?.length})
                </h4>

                <div className={styles.items}>
                  {itemCards?.map((item) => {
                    return (
                      <div key={item?.card?.info?.id}>
                        {item?.card?.info?.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
