import styles from "./ProvidersSlider.module.scss";
import logo1 from "../../images/pr-logo-1.png";
import logo2 from "../../images/pr-logo-2.png";
import logo3 from "../../images/pr-logo-3.png";
import logo4 from "../../images/pr-logo-4.png";
import ProvidersSliderCard from "../ProvidersSliderCard/ProvidersSliderCard";
import { Link } from "react-router-dom";

export default function ProvidersSlider() {
  const providers = [
    { name: "Inknovators", image: `${logo1}` },
    { name: "Amagic", image: `${logo2}` },
    { name: "Colors", image: `${logo3}` },
    { name: "Creative", image: `${logo4}` },
  ];
  return (
    <span className={styles.wrapper}>
      <span className={styles.wrapper__header}>
        <h2 className={styles.wrapper__header__title}>Поставщики</h2>
        {/*место для кнопок переключения слайдера*/}
      </span>

      <div className={styles.wrapper__slider}>
        {providers.map((provider, i) => (
          <ProvidersSliderCard
            index={i}
            name={provider.name}
            image={provider.image}
          />
        ))}
      </div>

      <Link to={"/providers"} className={styles.wrapper__button}>
        Посмотреть еще
      </Link>
    </span>
  );
}
