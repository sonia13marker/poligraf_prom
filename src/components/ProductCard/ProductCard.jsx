import styles from "./ProductCard.module.scss";
import style from "../ProductsComponent/ProductsComponent.module.scss";
import SmallTag from "../SmallTag/SmallTag";
import plug from "../../images/plug_for_images.png";

export default function ProductCard({ product }) {
  const publicPath = process.env.PUBLIC_URL;
  // console.log("Поставщик", product.name.length)
  return (
    <a
      href={`${publicPath}/${product.file}`}
      style={{ cursor: product.file !== null ? "pointer" : "not-allowed" }}
      target="_blank"
      rel="noreferrer"
      title={product.name.length >= 40 ?`${product.name}`: ``}
      className={styles.card}
    >
      <span className={styles.card__wrapperImg} style={{backgroundImage: product.image !== "" ? `url(${publicPath}/${product.image})` : `url(${plug})` }}>
        </span>
      {/* {product.image !== "" ? (
        <span className={styles.card__wrapperImg} style={{backgroundImage: product.image !== "" ? `url(${publicPath}/${product.image})` : `url(${plug})` }}>
          
        </span>
      ) : (<span className={styles.card__wrapperImg}>
        
      </span>)} */}

      <span className={styles.card__wrapper}>
        <h3 className={styles.card__wrapper__name}>{product.name}</h3>
        <span className={styles.card__wrapper__tags}>
          {product.tags?.map((tag, i) => (
            <SmallTag key={i} name={tag} />
          ))}
        </span>
      </span>
    </a>
  );
}
