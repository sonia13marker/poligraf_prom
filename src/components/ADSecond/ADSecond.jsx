import styles from "./ADSecond.module.scss";

export default function ADSecond() {
  return (
    <span className={styles.background}>
      <span className={styles.background__textList}>
        <h3 className={`${styles.background__textList__text} ${styles.text1} `}>
          Готовы обучить по программам полиграфии
        </h3>
        <h3 className={`${styles.background__textList__text} ${styles.text2} `}>
          в международном тренинг центре{" "}
        </h3>
        <h3 className={`${styles.background__textList__text} ${styles.text3} `}>
          промышленной печати
        </h3>
      </span>
      <p className={styles.background__text2}>
        Уточняйте информацию по номеру телефона +7-918-076-14-64
      </p>
    </span>
  );
}
