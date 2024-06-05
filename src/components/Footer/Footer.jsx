import styles from "./Footer.module.scss";
import FooterListComponent from "../FooterListComponent/FooterListComponent";
import logo_footer_desktop from "../../images/logo_footer_desktop.png";
import { Link } from "react-router-dom";
import AdressComponent from "../AdressComponent/AdressComponent";
import ScrollToTopBtn from "../ScrollToTopBtn/ScrollToTopBtn";

export default function Footer() {
  const links = [
    { to: "/", name: "Главная", colorClass: "main-page-color" },
    {
      to: "/providers",
      name: "Поставщики",
      colorClass: "provider-page-color",
    },
    { to: "/catalog", name: "Каталог", colorClass: "catalog-page-color" },
    {
      to: "/news",
      name: "Новости",
      colorClass: "news-page-color",
    },
    { to: "/contacts", name: "Контакты", colorClass: "contacts-page-color" },
  ];

  return (
    <div className={styles.footer__wrapper}>
      <span className={styles.footer}>
        <Link to="/" className={styles.footer__logo}>
          <img src={logo_footer_desktop} alt="logo" />
        </Link>

        <span className={styles.footer__twoBlock}>
          <FooterListComponent links={links} />

          <span className={styles.footer__twoBlock__two}>
            <span className={styles.footer__twoBlock__two__adressList}>
              <AdressComponent
                type=""
                title="Адрес"
                text="г. Краснодар, ул. Зиповская, 9, литер К, офис 6"
              />
              <AdressComponent
                type=""
                title="Email"
                text="poligrafprom-krd@mail.ru"
              />
              <AdressComponent
                type=""
                title="Номер телефона:"
                text="+7-918-076-14-64"
              />
            </span>
            {/*button back to top*/}
            <ScrollToTopBtn />
          </span>
        </span>
      </span>
      <p className={styles.footer__wrapper__text}>
        {" "}
        2024 &copy; ООО “Полиграфпром”{" "}
      </p>
    </div>
  );
}
