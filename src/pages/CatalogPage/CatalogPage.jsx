import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import tags from "../../data/catalogTags.json";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";

export default function CatalogPage({ catalogs }) {
  return (
    <div className={style.container}>
      <HeaderForPages title="Каталог" searchMock="Найти товары..." />
      <span className={style.tagList} style={{ flexDirection: "column" }}>
        {tags.tags.map((tag, i) => (
          <TagsComponent
            key={i}
            title={tag.title}
            tagList={tag.tagList}
            page="catalog"
          />
        ))}
      </span>
      <ProductsComponent catalogs={catalogs} />
    </div>
  );
}
