import styles from "./AboutCompanyComponent.module.scss";
import "../../style.module.scss";
import AboutCompanySmallBlock from "../AboutCompanySmallBlock/AboutCompanySmallBlock";
import AboutCompanyBigBlock from "../AboutCompanyBigBlock/AboutCompanyBigBlock";
import AboutCompanyLargeBottomBlock from "../AboutCompanyLargeBottomBlock/AboutCompanyLargeBottomBlock";
import AboutCompanyLargeTopBlock from "../AboutCompanyLargeTopBlock/AboutCompanyLargeTopBlock";

export default function AboutCompanyComponent() {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>О компании</h3>

      <span className={styles.about__wrapper}>
        <span className={styles.about__wrapper__oneHalf}>
          <span className={styles.about__wrapper__oneHalf__one}>
            <AboutCompanySmallBlock
              text="Стабильность - наш ключ к успеху, мы работаем уже более 13 лет"
              color={`$catalog-page-color`}
            />
            <AboutCompanySmallBlock
              text="Гибкая ценовая политика"
              color={`$news-page-color`}
            />
          </span>
          <AboutCompanyBigBlock
            color={`$main-page-color`}
            text="ООО «Полиграфпром» работает лишь с крупнейшими компаниями Европы, Америки и Азии, которые зарекомендовали себя на мировом рынке как стабильные, надежные партнеры, поставляющие неизменно качественную продукцию"
          />
        </span>
        <span className={styles.about__wrapper__twoHalf}>
          <span className={styles.about__wrapper__twoHalf__wrapper}>
            <span className={styles.about__wrapper__twoHalf__wrapper__one}>
              <AboutCompanyLargeBottomBlock
                color={`$providers-page-color`}
                text="Офис и постоянно возобновляемый склад, находящиеся на одной территории"
              />
              <AboutCompanySmallBlock
                text="Мы предоставляем наши услуги клиентам всего Южного федерального округа"
                color={`$catalog-page-color`}
              />
            </span>

            <span className={styles.about__wrapper__twoHalf__wrapper__two}>
              <AboutCompanySmallBlock
                text="Качественная продукция, подтвержденная сертификатами ISO"
                color={`$contacts-page-color`}
              />

              <AboutCompanyLargeTopBlock
                color={`$news-page-color`}
                text="Лаборатория, где работает команда технологов и колористов"
              />
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}
