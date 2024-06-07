import style from "./OneProviderPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
// import color_map from "../../images/color_map_inknovators.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import OneProviderComponent from "../../components/OneProviderComponent/OneProviderComponent";

export default function OneProviderPage({
  pageName,
  tagList,
  siteLink,
  products,
  documentLink,
}) {
  console.log(products);
  return (
    <div className={style.container}>
      <span className={style.container__header}>
        <GoBackButton type="providers" />
        <HeaderForPages
          title={pageName}
          // title="Inknovators"
          searchMock="Найти товары..."
          siteLink={siteLink}
          documentLink={documentLink}
        />
        <span className={style.container__header__tagList}>
          {/*{tagList.map((tag, i) => (*/}
          {/*  <TagsComponent key={i} title={tag.title} tagList={tag.tagList} />*/}
          {/*))}*/}
        </span>
      </span>
      <OneProviderComponent products={products} />
    </div>
  );
}
