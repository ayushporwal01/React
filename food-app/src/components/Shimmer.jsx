import styles from "./shimmer.module.css";
import ShimmerCard from "./ShimmerCard";

export default function Shimmer() {
  return (
    <div className={styles.shimmerContainer}>
      {Array(8).map(() => {
        <ShimmerCard />;
      })}
    </div>
  );
}

<ShimmerCard />;
