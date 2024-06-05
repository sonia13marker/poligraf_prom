import styles from "./NewsCard.module.scss";
import { Link } from "react-router-dom";
import SmallRightArrow from "../../icons/SmallRightArrow";
import { useState } from "react";
import TagForNews from "../TagForNews/TagForNews";

export default function NewsCard({ title, tag, image }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };

  return (
    <div className={styles.wrapper}>
      {tag !== "" ? <TagForNews type={tag} /> : <></>}

      <img
        src={image === undefined ? "Нет картинки" : image}
        alt=""
        className={styles.wrapper__image}
      />

      <Link
        to={"/"}
        className={styles.wrapper__textBlock}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseDown}
      >
        <h4 className={styles.wrapper__textBlock__title}>{title}</h4>

        <span className={styles.wrapper__textBlock__button}>
          <p className={styles.wrapper__textBlock__button__p}>Читать</p>
          <SmallRightArrow hover={isHover} />
        </span>
      </Link>
    </div>
  );
}
