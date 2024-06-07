import style from "./OneProviderComponent.module.scss";
import ProviderProductCard from "../ProviderProductCard/ProviderProductCard";

export default function OneProviderComponent({ products }) {
  return (
    <span className={style.body}>
      <span className={style.body__cardsList}>
        {products.map((product, i) => (
          <ProviderProductCard
            key={i}
            name={product.name}
            image={product.image}
            file={product.file}
          />
        ))}
      </span>
      {products.length > 6 ? (
        <button className={style.body__cardsList__btnShowMore}>
          Показать еще
        </button>
      ) : (
        <></>
      )}
    </span>
  );
}
