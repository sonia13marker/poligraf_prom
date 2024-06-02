import styles from "./AdressComponent.module.scss";

export default function AdressComponent({ title, text }) {
  return (
    <span className={styles.wrapper}>
      <h5 className={styles.wrapper__title}>{title}:</h5>
      <p className={styles.wrapper__text}>{text}</p>
    </span>
  );
}
