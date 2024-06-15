import style from "./ProductsComponent.module.scss";
import product from "../../data/productsForCatalog.json";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

export default function ProductsComponent({ catalogs }) {
  const [isSliced, setIsSliced] = useState(8);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
        {catalogs.products.slice(0, isSliced).map((product, i) => (
          <ProductCard
            key={i}
            name={product.name}
            image={product.image}
            tags={product.tags}
            file={product.file}
          />
        ))}
      </span>
      {product.products.length > 6 ? (
        <button
          className={style.wrapper__button}
          onClick={() => showMore(8)}
          style={{
            display: isSliced >= catalogs.products.length ? "none" : "block",
          }}
        >
          Показать еще
        </button>
      ) : (
        <></>
      )}
    </span>
  );
}
