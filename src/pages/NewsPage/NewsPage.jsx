import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import NewsComponent from "../../components/NewsComponent/NewsComponent";

export default function NewsPage() {
  return (
    <div>
      <HeaderForPages title="Новости" searchMock="Найти новость..." />
      <NewsComponent />
    </div>
  );
}
