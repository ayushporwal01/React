import styles from "./home.module.css";
import { API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ItemFilter from "./ItemFilter";
import Shimmer from "./Shimmer";

export default function Home() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }

      const json = await response.json();

      const restaurants =
        json?.data?.cards
          ?.map((c) => c?.card?.card)
          ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)
          ?.gridElements?.infoWithStyle?.restaurants ?? [];

      console.log(json?.data?.cards[1]?.card);
      console.log(json?.data?.cards[1]?.card?.card);
      console.log(json?.data?.cards[1]?.card?.card?.card);

      const processedList = (restaurants ?? []).map((res) => ({
        ...res,
        price: parseInt(res?.info?.costForTwo?.replace(/\D/g, "") || "0"),
      }));

      setListOfRestaurant(processedList);
      setFilteredRestaurant(processedList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
        {loading ? (
          Array(8)
            .fill("")
            .map((_, i) => <Shimmer key={i} />)
        ) : error ? (
          <h2>Error: {error}</h2>
        ) : filteredRestaurant.length === 0 ? (
          <p className={styles.noResFoundMsg}>No Restaurants found</p>
        ) : (
          filteredRestaurant.map((res) => (
            <RestaurantCard key={res?.info?.id} resData={res} />
          ))
        )}
      </div>
    </div>
  );
}
