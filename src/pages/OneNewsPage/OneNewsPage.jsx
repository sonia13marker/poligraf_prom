import styles from "./OneNewsPage.module.scss";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import "../../style.module.scss";
import CustomSliderForNewsPage from "../../components/CustomSliderForNewsPage/CustomSliderForNewsPage";
import { useParams } from "react-router-dom";
import news from "../../data/news.json";

export default function OneNewsPage() {
  const { id } = useParams();
  const oneNew = news.news.find((item) => item.id === parseInt(id));
  console.log(oneNew);
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapper__btnGoBack}>
        <GoBackButton type="news" />
      </span>
      <h2 className={styles.wrapper__title}>{oneNew.title}</h2>

      <span
        className={styles.wrapper__textContainer}
        style={{ gap: oneNew.images?.length === 0 ? "0px" : "65px" }}
      >
        <span className={styles.wrapper__textContainer__images}>
          <CustomSliderForNewsPage images={oneNew.images} />
        </span>
        {oneNew.images?.length !== 0 ? (
          <p className={styles.wrapper__textContainer__text}>{oneNew.desc}</p>
        ) : (
          <p
            className={`${styles.wrapper__textContainer__text} ${styles.textCenter}`}
          >
            {oneNew.desc}
          </p>
        )}
      </span>
    </div>
  );
}
