import style from "../ProvidersPage/ProvidersPage.module.scss";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import tags from "../../data/catalogTags.json";
import TagsComponent from "../../components/TagsComponent/TagsComponent";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import productsData from "../../data/dd.json";
import { useState } from "react";

// // Функция для перемешивания массива
// const shuffleArray = (array) => {
//   const newArray = [...array]; // Создаем копию массива
//   for (let i = newArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Меняем элементы местами
//   }
//   return newArray;
// };

// // Собираем все продукты в один массив
// const allProducts = productsData.products.flatMap(supplier => 
//   (supplier.products || []).map(product => ({
//       ...product,
//       supplierName: supplier.name, // Добавляем имя поставщика к продукту
//   }))
// );

// // Перемешиваем продукты один раз
// const shuffledProducts = shuffleArray(allProducts);
export default function CatalogPage({ }) { 
  const [value, setValue] = useState(""); // Текст из поля поиска
console.log(value)

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
      <HeaderForPages title="Каталог" searchMock="Найти товары..." value={value} setValue={setValue} />
      <span className={style.tagList} style={{ flexDirection: "column" }}>
      {
          activeTag ? <button className={style.tagList__closer__yellow} onClick={setNullTags}>✕ Сбросить фильтр
          </button> : <></>
        }
        {tags.tags.map((tag, i) => (
          <TagsComponent
            key={i}
            title={tag.title}
            tagList={tag.tagList}
            page="catalog"
            onTagClick={handleTagClick} // Передаем функцию для выбора тега
            activeTag={activeTag} // Передаем активный тег
          />
        ))}
      </span>
       <div className="product-list">
        {/* Показывает перемешанный массив на странице */}
       {/* {shuffledProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <h2>{product.name}</h2>
                        <p>Поставщик: {product.supplierName}</p>
                        <img src={product.image} alt={product.name} />
                        <a href={product.file} target="_blank" rel="noopener noreferrer">
                            Скачать PDF
                        </a>
                    </div>
                ))} */}
                
<ProductsComponent product={productsData} selectedTag={selectedTag} searchValue={value}/>
                  
            </div>
    </div>
  );
}
