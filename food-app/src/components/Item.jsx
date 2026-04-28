import styles from "./item.module.css";

export default function Item({item}) {
  const info = item?.card?.info;
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemLeft}>
        <h4 className={styles.itemName}>{info?.name}</h4>
        <p className={styles.cost}>&#8377;{info?.defaultPrice / 100}</p>
        <p className={styles.rating}>&#9733;{info?.ratings?.aggregatedRating?.rating}</p>
        <p className={styles.description}>{info?.description}</p>
      </div>
      <div className={styles.itemRight}>
        <img
          className={styles.itemImg}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}`}
          alt={info?.name}
        />
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
}
