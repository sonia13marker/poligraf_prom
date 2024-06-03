import style from "./TagsComponent.module.scss";
import { useState } from "react";
import Tag from "../Tag/Tag";

export default function TagsComponent({ title, tagList }) {
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? tagList : tagList.slice(0, 3);
  return (
    <span className={style.wrapper}>
      <h5 className={style.wrapper__title}> {title}: </h5>
      <span className={style.wrapper__tagsList}>
        {displayedTags.map((tag, i) => (
          <Tag key={i} name={tag} page="providers" />
        ))}
        {tagList.length > 3 && (
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className={style.wrapper__tagsList__button}
          >
            {showAllTags ? "Скрыть" : "Показать еще"}
          </button>
        )}
      </span>
    </span>
  );
}
