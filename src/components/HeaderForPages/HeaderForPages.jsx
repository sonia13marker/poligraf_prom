import style from "./HeaderForPages.module.scss";
import SearchComponent from "../SearchComponent/SearchComponent";
import ButtonsForHeader from "../ButtonsForHeader/ButtonsForHeader";

export default function HeaderForPages({
  title,
  searchMock,
  siteLink,
  documentLink,
}) {
  console.log(siteLink, documentLink);
  return (
    <span className={style.header}>
      {/*{hasButtons === "Yes" ? (*/}
      <span className={style.header__wrapper}>
        <h2 className={style.header__title}>{title}</h2>
        <ButtonsForHeader siteLink={siteLink} documentLink={documentLink} />
      </span>
      <SearchComponent searchMock={searchMock} />
    </span>
  );
}
