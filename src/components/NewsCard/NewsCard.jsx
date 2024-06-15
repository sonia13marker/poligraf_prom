import styles from "./NewsCard.module.scss";
import { Link } from "react-router-dom";
import SmallRightArrow from "../../icons/SmallRightArrow";
import { useState } from "react";
import TagForNews from "../TagForNews/TagForNews";
import mock_image from "../../images/mock_image.png";

export default function NewsCard({ title, tag, images, id, desc }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const publicPath = process.env.PUBLIC_URL;
  return (
    <Link
      to={`news/${id}`}
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tag !== "" ? <TagForNews type={tag} /> : <></>}
      {images.length !== 0 ? (
        <img
          src={`${publicPath}/${images[0]}`}
          alt=""
          className={styles.wrapper__image}
        />
      ) : (
        <img
          src={mock_image}
          alt="no image for news"
          className={styles.wrapper__image}
        />
      )}
      <span className={styles.wrapper__textBlock}>
        <h4 className={styles.wrapper__textBlock__title}>{title}</h4>

        <span className={styles.wrapper__textBlock__button}>
          <p className={styles.wrapper__textBlock__button__p}>Читать</p>
          <SmallRightArrow hover={hovered} />
        </span>
      </span>
    </Link>
  );
}
