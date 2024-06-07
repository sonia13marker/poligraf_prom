import styles from "./OneNewsPage.module.scss";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import "../../style.module.scss";
import CustomSliderForNewsPage from "../../components/CustomSliderForNewsPage/CustomSliderForNewsPage";

export default function OneNewsPage({ title, text, images }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapper__btnGoBack}>
        <GoBackButton type="news" />
      </span>
      <h2 className={styles.wrapper__title}>{title}</h2>

      <span
        className={styles.wrapper__textContainer}
        style={{ gap: images?.length === 0 ? "0px" : "65px" }}
      >
        <span className={styles.wrapper__textContainer__images}>
          <CustomSliderForNewsPage images={images} />
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
