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
      
      <div className="ResContainer">
        <h1 className="resName">Restaurant Name</h1>
        <span className="resDetails">
            <span className="starIcon">&#9733;</span>
            <span className="rating">4.5</span> &middot;
            <span className="deliveryTime">40-50mins</span>
        </span>
        <h3 className="cuisine">Pizzas</h3>
        <h3 className="location">Bairagarh</h3>
      </div>
    </div>
  );
}
