import styles from "./ProvidersSliderCard.module.scss";
import { Link } from "react-router-dom";

export default function ProvidersSliderCard({ name, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${image} card`} className={styles.card__image} />

      <span className={styles.card__wrapper}>
        <h3 className={styles.card__wrapper__name}>{name}</h3>
        <Link to={"/"} className={styles.card__wrapper__arrow} />
      </span>
    </div>
  );
}
