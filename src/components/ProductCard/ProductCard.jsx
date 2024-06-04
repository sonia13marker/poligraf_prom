import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import SmallTag from "../SmallTag/SmallTag";

export default function ProductCard({ name, image, tags }) {
  return (
    <Link to={"/"} className={styles.card}>
      <img src={`/`} alt={`${image}`} className={styles.card__image} />

      <span className={styles.card__wrapper}>
        <h3 className={styles.card__wrapper__name}>{name}</h3>
        <span className={styles.card__wrapper__tags}>
          {tags.map((tag, i) => (
            <SmallTag key={i} name={tag} />
          ))}
        </span>
      </span>
    </Link>
  );
}
