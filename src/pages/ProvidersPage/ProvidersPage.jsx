import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import style from "./ProvidersPage.module.scss";

export default function ProvidersPage() {
  return (
    <div className={style.container}>
      <HeaderForPages title="Поставщики" searchMock="Найти поставщика..." />
    </div>
  );
}
