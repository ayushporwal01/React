import styles from "./shimmer.module.css";

export default function Shimmer() {
  return (
    <div className={styles.shimmerCard}>
      <div className={styles.shimmerImg}></div>
      <div className={styles.shimmerLine1}></div>
      <div className={styles.shimmerLine2}></div>
      <div className={styles.shimmerLine3}></div>
      <div className={styles.shimmerLine4}></div>
    </div>
  );
}
