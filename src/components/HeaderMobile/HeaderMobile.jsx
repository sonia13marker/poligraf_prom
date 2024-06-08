import styles from "./HeaderMobile.module.scss";
import { Link } from "react-router-dom";
import logo_desktop from "../../images/logo_desktop.png";
import FooterListComponent from "../FooterListComponent/FooterListComponent";
import AdressComponent from "../AdressComponent/AdressComponent";
import { useState } from "react";
// import HeaderListComponent from "../HeaderListComponent/HeaderListComponent";

export default function HeaderMobile() {
  const links = [
    { to: "/", name: "Главная", colorClass: "main-page-color" },
    { to: "/providers", name: "Поставщики", colorClass: "provider-page-color" },
    { to: "/catalog", name: "Каталог", colorClass: "catalog-page-color" },
    { to: "/news", name: "Новости", colorClass: "news-page-color" },
    { to: "/contacts", name: "Контакты", colorClass: "contacts-page-color" },
  ];
  const customStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  };
  const [active, setActive] = useState(false);

  return (
    <div className={styles.header}>
      <span className={styles.header__container}>
        <Link to="/">
          <img
            src={logo_desktop}
            alt="logo"
            className={styles.header__container__logo}
          />
        </Link>

        <span
          className={styles.header__container__button}
          onClick={() => setActive(!active)}
        >
          <span
            className={
              active
                ? `${styles.header__container__button__line} ${styles.header__container__button__line__active}`
                : `${styles.header__container__button__line}`
            }
          ></span>
        </span>
      </span>

      <span
        className={
          active
            ? `${styles.header__container__body} ${styles.header__container__body__active}`
            : `${styles.header__container__body}`
        }
      >
        <FooterListComponent links={links} customStyle={customStyle} />

        <span className={styles.header__container__body__adressBlock}>
          <AdressComponent
            type=""
            title="Адрес"
            text="г. Краснодар, ул. Зиповская, 9, литер К, офис 6"
          />
          <AdressComponent
            type=""
            title="Номер телефона:"
            text="+7-918-076-14-64"
          />
        </span>
      </span>
    </div>
  );
}
