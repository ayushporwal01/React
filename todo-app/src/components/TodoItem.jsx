import styles from "./todoItem.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <li>{item}</li>
      <button className={styles.deleteBtn}>x</button>
    </div>
  );
}
