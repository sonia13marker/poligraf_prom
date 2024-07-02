import style from "./TagsComponent.module.scss";
import Tag from "../Tag/Tag";

export default function TagsComponent({ title, tagList, page }) {
  return (
    <span className={style.wrapper}>
      <h5 className={style.wrapper__title}> {title}: </h5>
      <span className={style.wrapper__tagsList}>
        {tagList.map((tag, i) => (
          <Tag key={i} name={tag} page={page} />
        ))}
      </span>
    </span>
  );
}
