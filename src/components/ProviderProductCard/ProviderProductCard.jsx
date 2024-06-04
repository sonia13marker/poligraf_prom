import styles from "./ProviderProductCard.module.scss";
import { Link } from "react-router-dom";

export default function ProviderProductCard({ image, name }) {
  return (
    <Link to={"/"} className={styles.card}>
      <img src={image} alt="card" className={styles.card__image} />

      <h3 className={styles.card__name}>{name}</h3>
    </Link>
  );
}
