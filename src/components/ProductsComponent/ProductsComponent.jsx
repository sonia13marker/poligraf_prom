import style from "./ProductsComponent.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function ProductsComponent({ product, selectedTag, searchValue }) {
  const [isSliced, setIsSliced] = useState(9);


  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };

  // Функция для фильтрации товаров
  const filteredProducts = product.products.filter((product) => {
    // Если выбран тег, фильтруем по тегу
    if (selectedTag) {
      return product.tags.includes(selectedTag);
    }

    // Если введён поисковый запрос, фильтруем по запросу
    if (searchValue) {
      return product.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Если ничего не выбрано, отображаем все товары
    return true;
  });



   return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
        {filteredProducts.slice(0, isSliced).map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </span>
      {filteredProducts.length > isSliced && (
        <button className={style.wrapper__button} onClick={() => showMore(9)}>
          Показать еще
        </button>
      )}
    </span>
  );
}
