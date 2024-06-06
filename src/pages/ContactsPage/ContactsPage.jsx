import styles from "./ContactsPage.module.scss";
import AdressComponent from "../../components/AdressComponent/AdressComponent";
import ContactsSlider from "../../components/ContactsSlider/ContactsSlider";

export default function ContactsPage() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>Контакты</h2>

      <div className={styles.wrapper__contacts}>
        <span className={styles.wrapper__contacts__text}>
          <AdressComponent
            type="contacts"
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
            title="Телефон директора"
            text="+7-918-076-14-64 (Александр)"
          />
          <AdressComponent
            type=""
            title="Телефон менеджера-технолога"
            text="+7-918-076-14-65 (Игорь)"
          />
          <AdressComponent type="" title="Skype" text="skatov67 (Александр)" />
          <AdressComponent
            type=""
            title="Skype"
            text="poligraphprom-igor (Игорь)"
          />
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
