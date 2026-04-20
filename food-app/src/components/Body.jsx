import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import SearchBar from "./SearchBar";

export default function Body() {
  return (
    <div className={styles.body}>

      <SearchBar />

      <div className={styles.resContainer}>
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}
