import style from "./OneProviderPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
// import color_map from "../../images/color_map_inknovators.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import OneProviderComponent from "../../components/OneProviderComponent/OneProviderComponent";
import { useParams } from "react-router-dom";
import providers from "../../data/providers.json";

export default function OneProviderPage({
  pageName,
  tagList,
  siteLink,
  products,
  documentLink,
}) {
  const { id } = useParams();
  const provider = providers.providers.find((item) => item.id === parseInt(id));
  console.log(provider);
  return (
    <>
      {provider ? (
        <div className={style.container}>
          <span className={style.container__header}>
            <GoBackButton type="providers" />
            <HeaderForPages
              title={provider.name}
              searchMock="Найти товары..."
              siteLink={provider.link}
              documentLink={provider.colorMap}
            />
            <span className={style.container__header__tagList}>
              {/*{provider.tags.map((tag, i) => (*/}
              {/*  <TagsComponent*/}
              {/*    key={i}*/}
              {/*    title={tag.title}*/}
              {/*    tagList={tag.tagList}*/}
              {/*  />*/}
              {/*))}*/}
            </span>
          </span>
          <OneProviderComponent products={provider.products} />
        </div>
      ) : (
        <p>Не найдено</p>
      )}
    </>
  );
}
