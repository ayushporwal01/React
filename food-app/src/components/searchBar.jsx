import styles from "searchBar.module.css";

export default function searchBar() {
  return (
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
  );
}
