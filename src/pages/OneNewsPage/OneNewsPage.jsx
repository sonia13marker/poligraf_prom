import styles from "./OneNewsPage.module.scss";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import "../../style.module.scss";

export default function OneNewsPage({ title, text, images }) {
  return (
    <div className={styles.wrapper}>
      <GoBackButton type="news" />
      <h2 className={styles.wrapper__title}>{title}</h2>

      <span
        className={styles.wrapper__textContainer}
        style={{ gap: images?.length === 0 ? "0px" : "65px" }}
      >
        <span className={styles.wrapper__textContainer__images}>
          {images &&
            images.map((image, i) => (
              <img
                src={image}
                key={i}
                alt={`news ${image}`}
                className={styles.wrapper__textContainer__images__img}
              />
            ))}
        </span>
        {images?.length !== 0 ? (
          <p className={styles.wrapper__textContainer__text}>{text}</p>
        ) : (
          <p
            className={`${styles.wrapper__textContainer__text} ${styles.textCenter}`}
          >
            {text}
          </p>
        )}
      </span>
    </div>
  );
}
