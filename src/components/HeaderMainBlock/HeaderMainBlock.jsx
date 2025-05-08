import styles from "./HeaderMainBlock.module.scss";
import HeaderButtonsComponent from "../HeaderButtonsComponent/HeaderButtonsComponent";

export default function HeaderMainBlock() {
  const links = [
    { linkTo: "/", title: "Узнать о компании", type: "scroll" },
    { linkTo: "/catalog", title: "Изучить каталог" },
    { linkTo: "/providers", title: "Посмотреть поставщиков" },
  ];

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerWrapper__title}>
      Решения для вашего шёлкотрафаретного бизнеса
      </h1>
      <div className={styles.headerWrapper__imageBlock}>
        <span className={styles.headerWrapper__imageBlock__buttons}>
          <HeaderButtonsComponent links={links} />
        </span>
      </div>
    </div>
  );
}
