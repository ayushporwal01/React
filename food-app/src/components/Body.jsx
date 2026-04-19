import styles from "./body.module.css";
import RestaurantCard from "./RestaurantCard";

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
        <RestaurantCard resName="Pizza Hut" rating="4.3" deliveryTime="30-35mins" cuisine="Pizzas" location="Bairagarh" />
        <RestaurantCard resName="KFC" rating="4.3" deliveryTime="40-50mins" cuisine="Burgers, Fast Food, Rolls & Wraps" location="Kohefiza" />
      </div>
    </div>
  );
}
