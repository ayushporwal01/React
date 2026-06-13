import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Category from "./Category";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import styles from "./resMenu.module.css";

export default function RestaurantMenu() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const categorySection = resInfo?.cards?.find((c) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let categoryCards = categorySection?.filter((c) => {
    const card = c?.card?.card;

    return (
      card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
      !card?.title?.toLowerCase().startsWith("items starting at")
    );
  });

  console.log("category-cards", categoryCards);

  const subCategoryCards = categorySection?.filter(
    (card) => card?.card?.card?.categories,
  );

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    infoCard?.card?.card?.info || {};

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.menuDetails}>
          <h1 className={styles.menuTitle}>{name}</h1>

          <div className={styles.rateCost}>
            <span>&#9733; </span>
            <span>{avgRating}</span> &bull;
            <span> {costForTwoMessage}</span>
          </div>

          <p className={styles.cuisines}>{cuisines?.join(", ")}</p>
        </div>

        <h4 className={styles.menuText}>MENU</h4>

        {/* Menu Sections */}
        <div className={styles.menuCategories}>
          {categoryCards?.map((section, index) => {
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
