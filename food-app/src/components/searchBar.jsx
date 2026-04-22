import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ listOfRestaurant, setFilteredRestaurant }) {
  const [searchText, setSearchText] = useState("");

  function searchFilter() {
    const filteredList = listOfRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredList);
  }
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        value={searchText}
        placeholder="Enter a Restaurant Name..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            searchFilter();
          }
        }}
      />
      <button className={styles.searchBtn} onClick={searchFilter}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
