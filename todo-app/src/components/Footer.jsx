import styles from "./footer.module.css";

export default function Footer({ completedTodos }) {
  return (
    <div className={styles.footer}>
        <span className={styles.completedTodos}>Completed Todos: {completedTodos}</span>
        <span className={styles.totalTodos}>Total Todos: {totalTodos}</span>
    </div>
  );
}
