import styles from "./AboutCompanySmallBlock.module.scss";

export default function AboutCompanySmallBlock({ hover, color, text, type }) {
  return (
    <span
      className={
        type === "accent"
          ? `${styles.block} ${styles.accent}`
          : `${styles.block}`
      }
    >
      <span
        className={
          hover
            ? `${styles.block__circle} ${styles.hoverCircle}`
            : `${styles.block__circle}`
        }
      ></span>

      <p className={styles.block__text}>{text}</p>
    </span>
  );
}
