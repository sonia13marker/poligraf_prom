import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import style from "./ProvidersPage.module.scss";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import tags from "../../data/providersTags.json";
import ProvidersComponent from "../../components/ProvidersComponent/ProvidersComponent";
import { useState } from "react";

export default function ProvidersPage({ providers }) {
  console.log(tags.tags);
  const [selectedTag, setSelectedTag] = useState(null); // Выбранный тег
    const [activeTag, setActiveTag] = useState(null); // Состояние для активного тега

    const handleTagClick = (tag) => {
      setSelectedTag(tag); // Фильтруем товары
      setActiveTag(tag); // Устанавливаем активный тег (передаем его название, чтобы потом сравнить с выбранным)
    };
  
  return (
    <div className={style.container}>
      <HeaderForPages title="Поставщики" searchMock="Найти поставщика..." />
      <span className={style.tagList}>
        {tags.tags.map((tag, i) => (
          <TagsComponent
            key={i}
            title={tag.title}
            tagList={tag.tagList}
            page="providers"
            onTagClick={handleTagClick}
            activeTag={activeTag}
          />
        ))}
      </span>
      <ProvidersComponent providers={providers} selectedTag={selectedTag}/>
    </div>
  );
}
