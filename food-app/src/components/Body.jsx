import styles from "./body.module.css";

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
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="ResContainer">Restaurant Cards</div>
    </div>
  );
}
