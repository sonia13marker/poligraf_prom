import style from "./ProductsComponent.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function ProductsComponent({ product }) {
  const [isSliced, setIsSliced] = useState(9);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };
  console.log("product", product.products.length)
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
      {product.products.slice(0, isSliced).map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </span>
      {product.products.length > isSliced && (
        <button
          className={style.wrapper__button}
          onClick={() => showMore(9)}
        >
          Показать еще
        </button>
      )}
    </span>
  );
}
