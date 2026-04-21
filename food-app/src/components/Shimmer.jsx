import styles from "./shimmer.module.css";

export default function Shimmer() {
  return (
    <div className={styles.shimmerContainer}>
      <div className={styles.shimmerCard}>
        <div className={styles.shimmerImg}></div>
        <div className={shimmerLine1}></div>
        <div className={shimmerLine2}></div>
        <div className={shimmerLine3}></div>
        <div className={shimmerLine4}></div>
      </div>
    </div>
  );
}
