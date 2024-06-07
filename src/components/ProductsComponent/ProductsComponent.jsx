import style from "./ProductsComponent.module.scss";
import product from "../../data/productsForCatalog.json";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsComponent() {
  return (
    <span className={style.wrapper}>
      <span className={style.wrapper__list}>
        {product.products.map((product, i) => (
          <ProductCard
            key={i}
            name={product.name}
            image={product.image}
            tags={product.tags}
          />
        ))}
      </span>
      {product.products.length > 6 ? (
        <button className={style.wrapper__button}>Показать еще</button>
      ) : (
        <></>
      )}
    </span>
  );
}
