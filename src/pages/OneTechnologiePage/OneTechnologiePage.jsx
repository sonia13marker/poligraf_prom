import styles from "./OneTechnologiePage.module.scss";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import TechnologieFileCard from "../../components/TechnologieFileCard/TechnologieFileCard";

export default function OneTechnologiePage({ title, files, text }) {
  console.log({ title, files, text });
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapper__header}>
        <span className={styles.wrapper__header__goBackBtn}>
          <GoBackButton type="main page" />
        </span>
        <h2 className={styles.wrapper__header__title}>{title}</h2>
      </span>

      <span className={styles.wrapper__textContainer}>
        {text &&
          text.map((paragraph, i) => (
            <span className={styles.wrapper__textContainer__paragraf} key={i}>
              {paragraph.title !== "" ? (
                <h4 className={styles.wrapper__textContainer__paragraf__title}>
                  {paragraph?.title}
                </h4>
              ) : (
                <></>
              )}
              <p className={styles.wrapper__textContainer__paragraf__text}>
                {paragraph.text}
              </p>
            </span>
          ))}

        <span className={styles.wrapper__textContainer__files}>
          {files &&
            files.map((file, i) => (
              <TechnologieFileCard
                file={file.file}
                fileName={file.name}
                key={i}
              />
            ))}
        </span>
      </span>
    </div>
  );
}
