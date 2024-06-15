import styles from "./ProductCard.module.scss";
import SmallTag from "../SmallTag/SmallTag";

export default function ProductCard({ name, image, tags, file }) {
  const publicPath = process.env.PUBLIC_URL;
  return (
    <a
      href={`${publicPath}/${file}`}
      style={{ cursor: file !== null ? "pointer" : "not-allowed" }}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      {image && (
        <span className={styles.card__wrapperImg}>
          <img
            src={`${publicPath}/${image}`}
            alt={`${image}`}
            className={styles.card__wrapperImg__image}
          />
        </span>
      )}

      <span className={styles.card__wrapper}>
        <h3 className={styles.card__wrapper__name}>{name}</h3>
        <span className={styles.card__wrapper__tags}>
          {tags?.map((tag, i) => (
            <SmallTag key={i} name={tag} />
          ))}
        </span>
      </span>
    </a>
  );
}
