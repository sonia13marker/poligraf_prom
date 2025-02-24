import style from "./OneProviderPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
// import color_map from "../../images/color_map_inknovators.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import OneProviderComponent from "../../components/OneProviderComponent/OneProviderComponent";
import { useParams } from "react-router-dom";
import providers from "../../data/providers.json";
import products from '../../data/providerProducts.json';

export default function OneProviderPage({
  pageName,
  tagList,
  siteLink,
  documentLink,
}) {
  const { id } = useParams();
  const provider = providers.providers.find((item) => item.id === parseInt(id));
  console.log("hehe", provider);
  console.log("products", products.products);
  //объявляем новую переменную, которая впоследствии передает массив продуктов в карточки 
  let productsForRecieved;
  products.products.map((i) => {
    //если id поставщика (в массиве поставщиков) равен id этого поставщика в другом массиве (с продуктами)
    if (i.id === provider.id) {
      //записываем все продукты в переменную
      productsForRecieved = i.products;
    }
  })
  console.log("productsForRecieved", productsForRecieved);
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
          {/*передаем переменную*/}
          <OneProviderComponent products={productsForRecieved} />
        </div>
      ) : (
        <p>Не найдено</p>
      )}
    </>
  );
}
