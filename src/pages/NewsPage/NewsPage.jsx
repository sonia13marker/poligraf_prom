import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import NewsComponent from "../../components/NewsComponent/NewsComponent";
import style from "./NewsPage.module.scss";

export default function NewsPage() {
  return (
    <div className={style.newsPage}>
      <HeaderForPages title="Новости" searchMock="Найти новость..." />
      <NewsComponent />
    </div>
  );
}
