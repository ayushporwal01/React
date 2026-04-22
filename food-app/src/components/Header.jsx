import styles from "./header.module.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="logo-container">
        <img className={styles.logo} src={LOGO_URL} alt="Namaste Food Logo" />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
