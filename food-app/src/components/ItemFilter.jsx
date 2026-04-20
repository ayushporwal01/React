import styles from "./ItemFilter.module.css";

export default function ItemFilter() {
  return (
    <div className={styles.container}>
     <label htmlFor="priceFilter">Sort by:</label>
      <select className={styles.dropdown} name="food" id="priceFilter">
        <option value="Normal">Normal</option>
        <option value="Low To High">Price -- Low To High</option>
        <option value="High To Low">Price -- High To Low</option>
      </select>
    </div>
  );
}
