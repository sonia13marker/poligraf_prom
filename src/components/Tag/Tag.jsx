import style from "./Tag.module.scss";

const Tag = ({ name, page }) => {
  if (page === "providers") {
    return <span className={`${style.wrapper} ${style.pink}`}>{name}</span>;
  } else if (page === "catalog") {
    return <span className={`${style.wrapper} ${style.yellow}`}>{name}</span>;
  }
};
export default Tag;
