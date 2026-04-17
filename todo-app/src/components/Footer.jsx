import styles from "./footer.module.css";

export default function Footer({ completedTodos }) {
  return (
    <div className={styles.footer}>
        <span className={styles.footerText}>Completed Todos: {completedTodos}</span>
    </div>
  );
}
