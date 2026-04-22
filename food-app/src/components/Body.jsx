import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ItemFilter from "./ItemFilter";
import ShimmerCard from "./ShimmerCard";

export default function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await data.json();

      const restaurantCard = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      const processedList = (restaurants ?? []).map((res) => ({
        ...res,
        price: parseInt(res?.info?.costForTwo.replace(/\D/g, "") || "0"),
      }));

      setListOfRestaurant(processedList);
      setFilteredRestaurant(processedList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className={styles.body}>
      <SearchBar
        listOfRestaurant={listOfRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />

      <ItemFilter
        listOfRestaurant={listOfRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />

      <div className={styles.resContainer}>
        {filteredRestaurant.length === 0
          ? Array(8)
              .fill("")
              .map((_, i) => <ShimmerCard key={i} />)
          : filteredRestaurant.map((res) => (
              <RestaurantCard key={res?.info?.id} resData={res} />
            ))}
      </div>
    </div>
  );
}
