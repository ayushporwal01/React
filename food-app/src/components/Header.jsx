import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo-container">
        <img className={styles.logo} src="src/assets/food-logo.png" alt="Namaste Food Logo" />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
