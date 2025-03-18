import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import style from "./ProvidersPage.module.scss";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import tags from "../../data/providersTags.json";
import ProvidersComponent from "../../components/ProvidersComponent/ProvidersComponent";
import { useState } from "react";

export default function ProvidersPage({ providers }) {
  const [value, setValue] = useState(""); // Текст из поля поиска
  console.log(tags.tags);
  const [selectedTag, setSelectedTag] = useState(null); // Выбранный тег
    const [activeTag, setActiveTag] = useState(null); // Состояние для активного тега

    const handleTagClick = (tag) => {
      setSelectedTag(tag); // Фильтруем товары
      setActiveTag(tag); // Устанавливаем активный тег (передаем его название, чтобы потом сравнить с выбранным)
    };

     //удаление значений для кнопки сброса тегов
  const setNullTags = () => {
    setSelectedTag("");
    setActiveTag(""); 
  }
  
  return (
    <div className={style.container}>
      <HeaderForPages title="Поставщики" searchMock="Найти поставщика..." value={value} setValue={setValue}/>
      <span className={style.tagList}>
      {
          activeTag ? <button className={style.tagList__closer__pink} onClick={setNullTags}>✕ Сбросить фильтр
          </button> : <></>
        }
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
      <ProvidersComponent providers={providers} selectedTag={selectedTag} searchValue={value}/>
    </div>
  );
}
