import styles from "./ContactsPage.module.scss";
import AdressComponent from "../../components/AdressComponent/AdressComponent";
import ContactsSlider from "../../components/ContactsSlider/ContactsSlider";
import { useEffect, useState } from "react";

export default function ContactsPage() {
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
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>Контакты</h2>

      <div className={styles.wrapper__contacts}>
        <span className={styles.wrapper__contacts__text}>
          <span className={styles.wrapper__contacts__text__oneBlock}>
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
              type=""
              title="Email"
              text="poligrafprom-krd@mail.ru"
            />
          </span>

          <span className={styles.wrapper__contacts__text__twoBlock}>
            <span className={styles.wrapper__contacts__text__twoBlock__one}>
              <AdressComponent
                type=""
                title="Телефон директора"
                text={
                  <span style={{ whiteSpace: 'pre-line', lineHeight: "140%" }}>
                    {`+7-918-076-14-64
+7-905-470-59-80 (Александр, WhatsApp и Telegram)`}
                  </span>
                }
              />
              <AdressComponent
                type=""
                title="Телефон менеджера-технолога"
                text="+7-918-076-14-65 (Игорь, WhatsApp)"
              />
            </span>
          </span>
        </span>
        {/*yandex-card*/}
        <iframe
          title="Интерактивная карта"
          className={styles.wrapper__contacts__card}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4b954f9aac3b2a6378c9f918bbec52d6a0d3df4ce093959365ea1ff35c1c38a&amp;source=constructor"
          width="100%"
          height="445"
        ></iframe>
        {/*slider*/}
        <ContactsSlider />
      </div>
    </div>
  );
}
