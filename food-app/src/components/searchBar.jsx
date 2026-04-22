import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ allRestaurants, setListOfRestaurant }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        value={searchText}
        placeholder="Enter a Restaurant Name..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className={styles.searchBtn}
        onClick={() => {
          const filteredRestaurant = allRestaurants.filter((res) => {
            return res.info.name === searchText;
          });

          setListOfRestaurant(filteredRestaurant);
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
