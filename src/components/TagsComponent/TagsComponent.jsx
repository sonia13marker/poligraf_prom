import style from "./TagsComponent.module.scss";
import Tag from "../Tag/Tag";

export default function TagsComponent({ 
  title, 
  tagList, 
  page, 
  onTagClick, 
  activeTags,
  onSelectAll,
  allSelected 
}) {
  return (
    <span className={style.wrapper}>
      <h5 className={style.wrapper__title}>{title}:</h5>
      <span className={style.wrapper__tagsList}>
        {tagList.map((tag, i) => (
          <Tag 
            key={i} 
            name={tag} 
            page={page} 
            onClick={() => onTagClick(tag)}
            isActive={activeTags.includes(tag)}
          />
        ))}
        <button 
          className={`${style.selectAllButton} ${allSelected ? style.active : ''}`}
          onClick={onSelectAll}
        >
          {allSelected ? "✕ Сбросить всё" : "Выбрать всё"}
        </button>
      </span>
    </span>
  );
}