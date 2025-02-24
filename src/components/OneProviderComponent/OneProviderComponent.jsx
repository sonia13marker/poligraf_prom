import style from "./OneProviderComponent.module.scss";
import ProviderProductCard from "../ProviderProductCard/ProviderProductCard";
import { useState } from "react";

export default function OneProviderComponent({ products }) {
  const [isSliced, setIsSliced] = useState(6);

  const showMore = (num) => {
    setIsSliced(isSliced + num);
  };
  return (
    <span className={style.body}>
      <span className={style.body__cardsList}>
        {products ? (
          products
            ?.slice(0, isSliced)
            .map((product, i) => (
              <ProviderProductCard
                key={i}
                name={product.name}
                image={product.image}
                file={product.file}
              />
            ))
        ) : (
          <p>К сожалению, тут нет товаров...</p>
        )}
      </span>
      {products?.length > 6 ? (
        <button
          className={style.body__cardsList__btnShowMore}
          onClick={() => showMore(6)}
          style={{
            display: isSliced >= products.length ? "none" : "block",
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
