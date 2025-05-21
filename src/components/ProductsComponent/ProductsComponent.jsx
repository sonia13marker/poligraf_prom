import style from "./ProductsComponent.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function ProductsComponent({ product, selectedTags, searchValue }) {
  const [isSliced, setIsSliced] = useState(9);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };

  // Функция для фильтрации товаров
  const filteredProducts = product.products.filter((product) => {
    // Если выбраны теги, фильтруем по тегам
    if (selectedTags && selectedTags.length > 0) {
      return selectedTags.some(tag => product.tags.includes(tag));
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
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, isSliced).map((product, index) => (
            <ProductCard product={product} key={index} />
          ))
        ) : (
          <p>Ничего не найдено...</p>
        )}
      </span>
      {filteredProducts.length > isSliced && (
        <button className={style.wrapper__button} onClick={() => showMore(9)}>
          Показать еще
        </button>
      )}
    </span>
  );
}