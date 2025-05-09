import styles from "./AboutCompanyComponent.module.scss";
import "../../style.module.scss";
import AboutCompanySmallBlock from "../AboutCompanySmallBlock/AboutCompanySmallBlock";
import AboutCompanyBigBlock from "../AboutCompanyBigBlock/AboutCompanyBigBlock";

export default function AboutCompanyComponent() {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>О компании</h3>

      <span className={styles.about__wrapper}>
        <span className={styles.about__wrapper__oneHalf}>
          <AboutCompanyBigBlock
            color={`$main-page-color`}
            text="ООО «Полиграфпром» работает лишь с крупнейшими компаниями Европы и Азии, которые зарекомендовали себя на мировом рынке как стабильные, надёжные партнёры, поставляющие неизменно качественную продукцию"
          />
          <span className={styles.about__wrapper__oneHalf__one}>
            <AboutCompanySmallBlock
              text="Гибкая ценовая политика, адаптированная под любые бюджеты и потребности клиентов"
              color={`$news-page-color`}
            />
            <AboutCompanySmallBlock
              text="Офис и постоянно возобновляемый склад, находящиеся на одной территории"
              color={`$news-page-color`}
            />
          </span>
        </span>
        <span className={styles.about__wrapper__twoHalf}>
          <span className={styles.about__wrapper__twoHalf__wrapper}>
            <span className={styles.about__wrapper__twoHalf__wrapper__one}>
              <AboutCompanySmallBlock
                text="Стабильность — наш ключ к успеху, мы работаем уже более 14 лет"
                color={`$catalog-page-color`}
              />
              <AboutCompanySmallBlock
                text="Качественная продукция, подтверждённая сертификатами ISO"
                color={`$contacts-page-color`}
              />
            </span>

            <span className={styles.about__wrapper__twoHalf__wrapper__two}>
              <AboutCompanySmallBlock
                text="Мы предоставляем наши услуги клиентам всего Южного федерального округа"
                color={`$catalog-page-color`}
              />
              <AboutCompanySmallBlock
                text="Бесплатная доставка по городу при заказе от 5 тысяч рублей"
                color={`$catalog-page-color`}
                type="accent"
              />
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}
