import styles from "./HeaderMainBlock.module.scss";
import HeaderButtonsComponent from "../HeaderButtonsComponent/HeaderButtonsComponent";

export default function HeaderMainBlock() {
  const links = [
    { linkTo: "/catalog", title: "Всё для графической печати", type: "scroll" },
    { linkTo: "/catalog", title: "Всё для текстильной печати" },
    { linkTo: "/catalog", title: "Всё для ТПФ" },
  ];

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerWrapper__title}>
      Решения для вашего шёлкотра&shy;фаретного бизнеса
      </h1>
      <span className={styles.headerWrapper__buttons}>
          <HeaderButtonsComponent links={links} />
        </span>
      <div className={styles.headerWrapper__imageBlock}>
      </div>
    </div>
  );
}
