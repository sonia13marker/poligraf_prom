import styles from "./ADFirst.module.scss";
import img from "../../images/AD-1.png";
import img1 from "../../images/AD-1-small.png";
import ResizeComponent from "../ResizeComponent/ResizeComponent";

export default function ADFirst() {
  return (
    <span className={styles.background}>
      <span className={styles.background__text}>
        <h3 className={styles.background__text__title}>
          Оказываем <br /> поддержку 24/7
        </h3>
        <ResizeComponent
          defaultComponent={<></>}
          resizedComponent={
            <span className={styles.background__text__number}>
              +7-918-076-14-64
            </span>
          }
          resizeValue="925"
        />
        <p className={styles.background__text__p}>
          Поможем разобраться в деталях, объясним принцип работы, правильно настроим оборудование, проконсультируем перед покупкой и всегда будем на связи после приобретения товара
        </p>
      </span>
      <ResizeComponent
        defaultComponent={
          <img src={img} alt="" className={styles.background__image} />
        }
        resizedComponent={
          <img src={img1} alt="" className={styles.background__image} />
        }
        resizeValue="925"
      />
    </span>
  );
}
