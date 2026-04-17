import styles from "./footer.module.css";

export default function Footer({ completedTodos }) {
  return (
    <span className={styles.footer}>Completed Todos: {CompletedTodos}</span>
  );
}
