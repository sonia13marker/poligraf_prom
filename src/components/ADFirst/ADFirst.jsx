import styles from "./ADFirst.module.scss";
import img from "../../images/AD-1.png";

export default function ADFirst() {
  return (
    <span className={styles.background}>
      <span className={styles.background__text}>
        <h3 className={styles.background__text__title}>
          Оказываем <br /> поддержку 24/7
        </h3>
        <p className={styles.background__text__p}>
          Поможем разобраться в деталях, объясним принцип работы, правильно
          настроим оборудование, проконсультируем перед покупкой и всегда будем
          на связи после приобретения товара
        </p>
      </span>
      <img src={img} alt="" className={styles.background__image} />
    </span>
  );
}
