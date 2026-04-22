import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import ItemFilter from "./ItemFilter";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

export default function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.25050&lng=77.40650&carousel=true&third_party_vendor=1",
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
      setFilteredRestaurant(processedList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className={styles.body}>
      <SearchBar listOfRestaurant={listOfRestaurant} setFilteredRestaurant={setFilteredRestaurant} />

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
