import styles from "./ProvidersSliderCard.module.scss";
import { Link } from "react-router-dom";
import SmallTag from "../SmallTag/SmallTag";
import { useState } from "react";
import RightArrow from "../../icons/RightArrow";

export default function ProvidersSliderCard({
  name,
  image,
  type,
  // tagList,
  // linkToPage,
  link,
  products,
  id,
}) {
  const [showAllTags, setShowAllTags] = useState(false);
  const publicPath = process.env.PUBLIC_URL;
  if (type === "slider") {
    return (
      <div className={styles.slider__card}>
        <img
          src={`${publicPath}/${image}`}
          alt={`${image} card`}
          className={styles.slider__card__image}
        />

        <Link to={`/providers/${id}`} className={styles.slider__card__wrapper}>
          <h3 className={styles.slider__card__wrapper__name}>{name}</h3>
          <RightArrow />
        </Link>
      </div>
    );
  } else if (type === "page") {
    return (
      <div className={styles.page__card}>
        <img
          src={`${publicPath}/${image}`}
          alt={`${image} card`}
          className={styles.page__card__image}
          style={
           { opacity: 1 }
          }
        />

        <span className={styles.page__card__wrapper}>
          <Link
            to={`/providers/${id}`}
            className={styles.page__card__wrapper__line}
          >
            <h3 className={styles.page__card__wrapper__line__name}>{name}</h3>
            <RightArrow />
          </Link>
          {/* <span
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
          </span> */}
        </span>
      </div>
    );
  }
}
