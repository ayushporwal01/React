import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";

const resObj = {
  info: {
    id: "695745",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/646c488b-92bf-4696-9052-36a4765d6f2c_695745.JPG",
    locality: "Housing Board Colony",
    areaName: "Bairagarh",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "2.9K+",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-04-19 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
          description: "Best in Pizza",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Best in Pizza",
                imageId:
                  "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                theme: "",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "FREE ITEM",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-e81fcbc7-cad7-49a6-ac0c-cd4598299405",
  },
  cta: {
    link: "https://www.swiggy.com/city/bhopal/pizza-hut-housing-board-colony-bairagarh-rest695745",
    type: "WEBLINK",
  },
};

export default function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Enter a Restaurant Name..."
        />
        <button className={styles.searchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className={styles.resContainer}>
        <RestaurantCard
          resName="Pizza Hut"
          rating="4.3"
          deliveryTime="30-35mins"
          cuisine="Pizzas"
          location="Bairagarh"
        />
        <RestaurantCard
          resName="KFC"
          rating="4.3"
          deliveryTime="40-50mins"
          cuisine="Burgers, Fast Food, Rolls & Wraps"
          location="Kohefiza"
        />
      </div>
    </div>
  );
}
