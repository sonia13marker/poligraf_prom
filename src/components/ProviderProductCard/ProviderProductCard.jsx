import styles from "./ProviderProductCard.module.scss";
import plug from "../../images/plug_for_images.png";

export default function ProviderProductCard({ image, name, file }) {
  const publicPath = process.env.PUBLIC_URL;
  return (
    <a
      href={`${publicPath}/${file}`}
      target="_blank"
      rel="noreferrer"
      style={{ cursor: file !== null ? "pointer" : "not-allowed" }}
      title={name.length >= 40 ?`${name}`: ``}
      className={styles.card}
    >
      <span className={styles.card__wrapper}>
        <img
          src={image !== "" ? `${publicPath}/${image}` : `${plug}`}
          alt="card"
          className={styles.card__wrapper__image}
        />
      </span>

      <h3 className={styles.card__name}>{name}</h3>
    </a>
  );
}
