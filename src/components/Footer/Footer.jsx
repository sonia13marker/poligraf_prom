import styles from "./Footer.module.scss";
import FooterListComponent from "../FooterListComponent/FooterListComponent";
import logo_footer_desktop from "../../images/logo_footer_desktop.png";
import { Link } from "react-router-dom";
import AdressComponent from "../AdressComponent/AdressComponent";
import ScrollToTopBtn from "../ScrollToTopBtn/ScrollToTopBtn";
import { useEffect, useState } from "react";

export default function Footer() {
  const links = [
    { to: "/catalog", name: "Основные направления", colorClass: "catalog-page-color" },
    { to: "/cards", name: "Цветовые карты", colorClass: "main-page-color" },
    { to: "/providers", name: "Поставщики", colorClass: "provider-page-color" },
    { to: "/news", name: "Новости", colorClass: "news-page-color" },
    { to: "/contacts", name: "Контакты", colorClass: "contacts-page-color" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.footer__wrapper}>
      <span className={styles.footer}>
        <span className={styles.footer__oneBlock}>
          <Link
            to="/"
            className={styles.footer__logo}
            style={{ marginBottom: windowWidth >= 1095 ? "80px" : "0" }}
          >
            <img src={logo_footer_desktop} alt="logo" />
          </Link>
          {windowWidth <= 1095 && <ScrollToTopBtn />}
        </span>

        <span className={styles.footer__twoBlock}>
          <FooterListComponent links={links} />

          <span className={styles.footer__twoBlock__two}>
            <span className={styles.footer__twoBlock__two__adressList}>
              {windowWidth <= 845 ? (
                <>
                  {windowWidth <= 645 ? (
                    <AdressComponent
                      type="mobile"
                      title="Адрес"
                      text="г. Краснодар, ул. Зиповская, 9, литер К, офис 6"
                    />
                  ) : (
                    <AdressComponent
                      type="contacts"
                      title="Адрес"
                      text="г. Краснодар, ул. Зиповская, 9, литер К, офис 6"
                    />
                  )}

                  <AdressComponent
                    type="email"
                    title="Email"
                    text="poligrafprom-krd@mail.ru"
                  />
                  <AdressComponent
                    type="phone"
                    title="Номер телефона:"
                    text={[
                      "+7-918-076-14-64",
                      <br key="break" />,
                      "+7-918-076-14-65"
                    ]}
                  />
                </>
              ) : (
                <>
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
                    title="Номер телефона"
                    text={[
                      "+7-918-076-14-64",
                      <br key="break" />,
                      "+7-918-076-14-65"
                    ]}
                  />
                </>
              )}
            </span>
            {windowWidth > 1095 && (
              <span className={styles.footer__twoBlock__two__btn}>
                <ScrollToTopBtn />
              </span>
            )}
          </span>
        </span>
      </span>
      <p className={styles.footer__wrapper__text}>
        2025 &copy; ООО «Полиграфпром»
      </p>
    </div>
  );
}
