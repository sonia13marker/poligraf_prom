import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import tags from "../../data/providersTags.json";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import ProvidersComponent from "../../components/ProvidersComponent/ProvidersComponent";
import color_map from "../../images/color_map_inknovators.jpg";

export default function OneProviderPage({ pageName }) {
  return (
    <div className={style.container}>
      <HeaderForPages
        // title={pageName}
        title="Inknovators"
        searchMock="Найти товары..."
        hasButtons="Yes"
        siteLink="http://inknovators.com/"
        documentLink={color_map}
      />
      <span className={style.tagList}>
        {tags.tags.map((tag, i) => (
          <TagsComponent key={i} title={tag.title} tagList={tag.tagList} />
        ))}
      </span>
      <ProvidersComponent />
    </div>
  );
}
