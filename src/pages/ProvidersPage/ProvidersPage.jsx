import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import style from "./ProvidersPage.module.scss";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import tags from "../../data/providersTags.json";
import ProvidersComponent from "../../components/ProvidersComponent/ProvidersComponent";

export default function ProvidersPage() {
  console.log(tags.tags);
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
          />
        ))}
      </span>
      <ProvidersComponent />
    </div>
  );
}
