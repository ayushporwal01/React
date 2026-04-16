import styles from "./todoItem.module.css";

export default function TodoItem({ item }) {
  return (
    <li className={styles.item}>
      {item}
      <span>
        <button className={styles.deleteBtn}>X</button>
      </span>
    </li>
  );
}
