import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import SearchBar from "./SearchBar";
import ItemFilter from "./ItemFilter";
import { useEffect, useState } from "react";

export default function Body() {
  const processedList = resList.map((res) => ({
    ...res,
    price: parseInt(res.info.costForTwo.replace(/\D/g, "")),
  }));

  const [listOfRestaurant, setListOfRestaurant] = useState(processedList);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.25050&lng=77.40650&carousel=true&third_party_vendor=1",
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurants);
  }

  return (
    <div className={styles.body}>
      <SearchBar />

      <ItemFilter
        listOfRestaurant={listOfRestaurant}
        setListOfRestaurant={setListOfRestaurant}
        processedList={processedList}
      />

      <div className={styles.resContainer}>
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
}
