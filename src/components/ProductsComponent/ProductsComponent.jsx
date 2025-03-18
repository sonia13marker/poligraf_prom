import style from "./ProductsComponent.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function ProductsComponent({ product, selectedTag }) {
  const [isSliced, setIsSliced] = useState(9);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };
  console.log("product", product.products.length)
  // Фильтрация товаров по выбранному тегу
  const filteredProducts = selectedTag
    ? product.products.filter((product) => product.tags.includes(selectedTag))
    : product.products;

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
