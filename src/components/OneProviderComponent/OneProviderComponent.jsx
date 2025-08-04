import style from "./OneProviderComponent.module.scss";
import ProviderProductCard from "../ProviderProductCard/ProviderProductCard";

export default function OneProviderComponent({ products }) {  
  // Порядок и заголовки типов
  const typeOrder = {
    'basic colors': 'Базовые цвета',
    'flu colors': 'Флуоресцентные цвета',
    'cmyk colors': 'CMYK',
    'metallic colors': 'Металлики',
    'bases': 'Базы',
    'effects': 'Эффекты',
    'grids': 'Сетки',
    'chemical': 'Химия для изготовления и регенерации ТПФ',
    'emulsions': 'Эмульсии',
    'glue': 'Клеи для сеток',
    'retouch': 'Ретушь',    
  };

  // Проверяем и инициализируем products если он undefined/null
  const safeProducts = products || [];

  // Разделяем продукты на две группы с защитой от undefined
  const [typedProducts, untypedProducts] = safeProducts.reduce(
    ([typed, untyped], product) => {
      if (product.type && typeOrder[product.type]) {
        if (!typed[product.type]) typed[product.type] = [];
        typed[product.type].push(product);
      } else {
        untyped.push(product);
      }
      return [typed, untyped];
    },
    [{}, []]
  );

  return (
    <span className={style.body}>
      {/* 1. Продукты с типами (сгруппированные) */}
      {Object.keys(typeOrder)
        .filter(type => typedProducts[type]?.length > 0)
        .map((type) => (
          <div key={type} className={style.body__typeSection}>
            <h2 className={style.body__typeSection__title}>{typeOrder[type]}</h2>
            {type === "grids" && (
              <p className={style.body__typeSection__description}>
                Сетки желтого и белого цвета с различными толщинами нитей и различной шириной ролика (113, 127, 160, 180, 200 см):
              </p>
            )}
            <span className={style.body__cardsList}>
              {typedProducts[type].map((product, i) => (
                <ProviderProductCard
                  key={`typed-${type}-${i}`}
                  name={product.name}
                  image={product.image}
                  file={product.file}
                />
              ))}
            </span>
          </div>
        ))
      }

      {/* 2. Продукты без типа (если есть) */}
      {untypedProducts.length > 0 && (
        <div className={style.body__cardsList}>
          {untypedProducts.map((product, i) => (
            <ProviderProductCard
              key={`untyped-${i}`}
              name={product.name}
              image={product.image}
              file={product.file}
            />
          ))}
        </div>
      )}

      {/* Если вообще нет продуктов */}
      {safeProducts.length === 0 && (
        <p className={style.noProducts}>К сожалению, тут нет товаров...</p>
      )}
    </span>
  );
}