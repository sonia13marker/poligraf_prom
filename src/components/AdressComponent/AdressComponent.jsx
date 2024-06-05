import styles from "./AdressComponent.module.scss";

export default function AdressComponent({ title, text, type }) {
  if (type === "") {
    return (
      <span className={styles.wrapper}>
        <h5 className={styles.wrapper__title}>{title}:</h5>
        <p className={styles.wrapper__text}>{text}</p>
      </span>
    );
  } else if (type === "contacts") {
    return (
      <span className={styles.wrapper}>
        <h5 className={styles.wrapper__title}>{title}:</h5>
        <p className={styles.wrapper__text} style={{ maxWidth: "605px" }}>
          {text}
        </p>
      </span>
    );
  }
}
