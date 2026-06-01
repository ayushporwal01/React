import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Category from "./Category";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
    <div className="">
      <div className="">
        <div className="">
          <h1>{name}</h1>

          <span className="">
            <span className="">&#9733;</span>
            <span className="">{avgRating}</span> &bull;
            <span className=""> {costForTwoMessage}</span>
          </span>

          <p className="">{cuisines?.join(", ")}</p>
        </div>

        <h4 className="">Menu</h4>

        {/* Menu Sections */}
        <div className="">
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
