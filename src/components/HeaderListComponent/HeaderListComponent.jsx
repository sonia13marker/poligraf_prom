import { NavLink } from "react-router-dom";
import styles from "./HeaderListComponent.module.scss";
import "../../style.module.scss";

export default function HeaderListComponent({ links }) {
  return (
    <nav className={styles.listComponent}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) =>
            `${styles.listComponent__component} ${styles[link.colorClass]} ${isActive ? styles.active : ""}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
