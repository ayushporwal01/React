import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

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
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}
