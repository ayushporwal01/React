import styles from "./error.module.css";

export default function Error() {
  return (
    <div className={styles.errContainer}>
      <h1>404</h1>
      <h3>Not Found</h3>
    </div>
  );
}
