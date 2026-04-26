import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import styles from "./resMenu.module.css";
import { useParams } from "react-router-dom";
import Category from "./Category";

export default function RestaurantMenu() {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
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

  let cardsWithTitle = categoryCards.filter((card) => card?.card?.card?.title);

  if (cardsWithTitle[0]?.card?.card?.title?.toLowerCase() !== "recommended") {
    cardsWithTitle = cardsWithTitle.slice(1);
  }

  const subCategoryCards = categoryCards.filter(
    (card) => card?.card?.card?.categories,
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

        {/* Menu Sections */}
        <div className={styles.menuItems}>
          {cardsWithTitle?.map((section, index) => {
            return (
              <Category
                key={index}
                section={section}
                index={index}
                openCategoryIndex={openCategoryIndex}
                setOpenCategoryIndex={setOpenCategoryIndex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
