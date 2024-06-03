import style from "./HeaderForPages.module.scss";
import SearchComponent from "../SearchComponent/SearchComponent";

export default function HeaderForPages({ title, searchMock }) {
  return (
    <span className={style.header}>
      <h2 className={style.header__title}>{title}</h2>
      <SearchComponent searchMock={searchMock} />
    </span>
  );
}
