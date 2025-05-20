import styles from "./Header.module.scss";
import HeaderListComponent from "../HeaderListComponent/HeaderListComponent";
import logo_desktop from "../../images/logo_desktop.png";
import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { to: "/catalog", name: "Основные направления", colorClass: "catalog-page-color" },
    { to: "/colorcards", name: "Цветовые карты", colorClass: "main-page-color" },
    { to: "/providers", name: "Поставщики", colorClass: "provider-page-color" },
    { to: "/news", name: "Новости", colorClass: "news-page-color" },
    { to: "/contacts", name: "Контакты", colorClass: "contacts-page-color" },
  ];
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo_desktop} alt="logo" className={styles.header__logo} />
      </Link>

      <HeaderListComponent links={links} />
    </div>
  );
}
