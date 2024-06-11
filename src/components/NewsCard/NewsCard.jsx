import styles from "./NewsCard.module.scss";
import { Link } from "react-router-dom";
import SmallRightArrow from "../../icons/SmallRightArrow";
import { useState } from "react";
import TagForNews from "../TagForNews/TagForNews";
import mock_image from "../../images/mock_image.png";

export default function NewsCard({ title, tag, image }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tag !== "" ? <TagForNews type={tag} /> : <></>}
      {image ? (
        <img src={image} alt="" className={styles.wrapper__image} />
      ) : (
        <img src={mock_image} alt="" className={styles.wrapper__image} />
      )}
      <Link to={"#"} className={styles.wrapper__textBlock}>
        <h4 className={styles.wrapper__textBlock__title}>{title}</h4>

        <span className={styles.wrapper__textBlock__button}>
          <p className={styles.wrapper__textBlock__button__p}>Читать</p>
          <SmallRightArrow hover={hovered} />
        </span>
      </Link>
    </div>
  );
}
