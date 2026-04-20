import styles from "./ItemFilter.module.css";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export default function ItemFilter({list, setList, processedList}) {
  function handleSort(e) {
    let value = e.target.value;

    let sortedList = [...list];

    if (value === "low") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sortedList.sort((a, b) => b.price - a.price);
    } else sortedList = processedList;

    setList(sortedList);
  }

  return (
    <div className={styles.container}>
      <label htmlFor="priceFilter">Sort by:</label>

      <select className={styles.dropdown} onChange={handleSort}>
        <option value="normal">Normal</option>
        <option value="low">Price -- Low To High</option>
        <option value="high">Price -- High To Low</option>
      </select>
    </div>
  );
}
