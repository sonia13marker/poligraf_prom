import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import tags from "../../data/catalogTags.json";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import productsData from "../../data/dd.json";

{/*// Функция для перемешивания массива
const shuffleArray = (array) => {
  const newArray = [...array]; // Создаем копию массива
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Меняем элементы местами
  }
  return newArray;
};

// Собираем все продукты в один массив
const allProducts = productsData.products.flatMap(supplier => 
  (supplier.products || []).map(product => ({
      ...product,
      supplierName: supplier.name, // Добавляем имя поставщика к продукту
  }))
);

// Глобальная переменная для хранения перемешанных продуктов
let shuffledProducts;

// Если глобальная переменная еще не инициализирована, перемешиваем массив один раз
if (!shuffledProducts) {
  shuffledProducts = shuffleArray(allProducts);
}
console.log(shuffledProducts)
 */}
export default function CatalogPage({ }) { 
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
       <div className="product-list">
      
                {/* {shuffledProducts.map((product, index) => ( */}
                {/* {
                  productsData.products.map((products, index) => ( */}
<ProductsComponent product={productsData}/>
                  {/* ))
                } */}
            </div>
    </div>
  );
}
