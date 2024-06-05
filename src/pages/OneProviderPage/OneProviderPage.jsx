import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import color_map from "../../images/color_map_inknovators.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

export default function OneProviderPage({
  pageName,
  tagList,
  siteLink,
  products,
}) {
  return (
    <div className={style.container}>
      <GoBackButton type="providers" />
      <HeaderForPages
        title={pageName}
        // title="Inknovators"
        searchMock="Найти товары..."
        hasButtons="Yes"
        siteLink={siteLink}
        documentLink={color_map}
      />
      <span className={style.tagList}>
        {/*{tagList.map((tag, i) => (*/}
        {/*  <TagsComponent key={i} title={tag.title} tagList={tag.tagList} />*/}
        {/*))}*/}
      </span>
      {/*<ProvidersComponent />*/}
    </div>
  );
}
