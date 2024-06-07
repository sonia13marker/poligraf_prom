import styles from "./PartnersComponent.module.scss";
import logo1 from "../../images/partner-logo-1.png";
import logo2 from "../../images/partner-logo-2.png";
import PartnerCard from "../PartnerCard/PartnerCard";

export default function PartnersComponent() {
  const partners = [
    {
      image: `${logo1}`,
      link: "http://www.printexue.ru/",
      description:
        "«PRINTEX UE s.c» является динамически развивающейся компанией с богатым прошлым, стабильной производственной программой и собственным ноу-хау, создающим базу для успешного и долгосрочного развития. ",
    },
    {
      image: `${logo2}`,
      link: "http://www.premierprint.ru/",
      description:
        "«PRINTEX UE s.c» является динамически развивающейся компанией с богатым прошлым, стабильной производственной программой и собственным ноу-хау, создающим базу для успешного и долгосрочного развития. ",
    },
  ];
  return (
    <span className={styles.wrapper}>
      <h2 className={styles.wrapper__title}>Партнеры</h2>

      <span className={styles.wrapper__twoBlocks}>
        {partners.map((partner, i) => (
          <PartnerCard
            key={i}
            image={partner.image}
            link={partner.link}
            description={partner.description}
          />
        ))}
      </span>
    </span>
  );
}
