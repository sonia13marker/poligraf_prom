import styles from "./ProvidersSliderCard.module.scss";
import { Link } from "react-router-dom";
import SmallTag from "../SmallTag/SmallTag";
import { useState } from "react";

export default function ProvidersSliderCard({
  name,
  image,
  type,
  tagList,
  linkToPage,
  link,
  products,
}) {
  const [showAllTags, setShowAllTags] = useState(false);
  const publicPath = process.env.PUBLIC_URL;
  if (type === "slider") {
    return (
      <div className={styles.slider__card}>
        <img
          src={image}
          alt={`${image} card`}
          className={styles.slider__card__image}
        />

        <span className={styles.slider__card__wrapper}>
          <h3 className={styles.slider__card__wrapper__name}>{name}</h3>
          <Link to={"/"} className={styles.slider__card__wrapper__arrow} />
        </span>
      </div>
    );
  } else if (type === "page") {
    return (
      <Link to={`/providers/${linkToPage}`} className={styles.page__card}>
        <img
          src={`${publicPath}/${image}`}
          alt={`${image} card`}
          className={styles.page__card__image}
          style={
            showAllTags && tagList.length >= 7 ? { opacity: 0 } : { opacity: 1 }
          }
        />

        <span className={styles.page__card__wrapper}>
          <span className={styles.page__card__wrapper__line}>
            <h3 className={styles.page__card__wrapper__line__name}>{name}</h3>
            <Link
              to={`/providers/${linkToPage}`}
              className={styles.page__card__wrapper__line__arrow}
            />
          </span>
          <span
            className={styles.page__card__tagList}
            style={
              tagList.length <= 2
                ? { height: "max-content", overflow: "visible" }
                : showAllTags
                  ? {
                      height: "max-content",
                      overflow: "visible",
                    }
                  : { height: "max-content", overflow: "hidden" }
            }
          >
            {tagList
              .slice(0, showAllTags ? tagList.length : 2)
              .map((tag, i) => (
                <SmallTag key={i} name={tag} />
              ))}

            {!showAllTags && tagList.length > 2 && (
              <button
                onClick={() => setShowAllTags(true)}
                className={styles.page__card__tagList__button}
              >
                Еще {tagList.length - 2}
              </button>
            )}
          </span>
        </span>
      </Link>
    );
  }
}
