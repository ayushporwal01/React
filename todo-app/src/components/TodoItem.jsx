import styles from "./todoItem.module.css";

export default function TodoItem({ item }) {
  return <li className={styles.item}>{item}</li>;
}
