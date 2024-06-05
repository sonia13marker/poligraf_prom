import styles from "./OneNewsPage.module.scss";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import "../../style.module.scss";

export default function OneNewsPage({ title, text }) {
  return (
    <div className={styles.wrapper}>
      <GoBackButton type="news" />
      <h2 className={styles.wrapper__title}>{title}</h2>

      <span className={styles.wrapper__textContainer}>
        {/*<img src={`${image}`} alt="" />*/}
        <p className={styles.wrapper__textContainer__text}>{text}</p>
      </span>
    </div>
  );
}
