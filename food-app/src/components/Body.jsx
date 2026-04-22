import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import ItemFilter from "./ItemFilter";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.25050&lng=77.40650&carousel=true&third_party_vendor=1",
      );
      const json = await data.json();

      const restaurantCard = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      const processedList = restaurants.map((res) => ({
        ...res,
        price: parseInt(res.info.costForTwo.replace(/\D/g, "")),
      }));

      setListOfRestaurant(processedList);
      setAllRestaurants(processedList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className={styles.body}>
      <SearchBar />

      <ItemFilter
        listOfRestaurant={listOfRestaurant}
        setListOfRestaurant={setListOfRestaurant}
        restaurants={allRestaurants}
      />

      <div className={styles.resContainer}>
        {listOfRestaurant.length === 0
          ? Array(8)
              .fill("")
              .map((_, i) => <ShimmerCard key={i} />)
          : listOfRestaurant.map((res) => (
              <RestaurantCard key={res?.info?.id} resData={res} />
            ))}
      </div>
    </div>
  );
}
