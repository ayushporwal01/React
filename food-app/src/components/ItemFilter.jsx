import styles from "./ItemFilter.module.css";
import RestaurantCard from "./RestaurantCard";

export default function ItemFilter({listOfRestaurant, setFilteredRestaurant}) {
  function priceFilter(e) {
    let value = e.target.value;

    let sortedList = [...listOfRestaurant];

    if (value === "low") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sortedList.sort((a, b) => b.price - a.price);
    }

    setFilteredRestaurant(sortedList);
  }

  return (
    <div className={styles.container}>
      <select className={styles.dropdown} onChange={priceFilter}>
        <option value="" disabled hidden>Sort By</option>
        <option value="default">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <i className="fa-solid fa-angle-down"></i>
    </div>
  );
}
