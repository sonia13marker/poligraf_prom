import styles from './Header.module.scss';
import HeaderListComponent from "../HeaderListComponent/HeaderListComponent";
import '../../style.module.scss';

export default function Header() {
    return <div className={styles.header}>
        <img src="" alt="logo" className={styles.header__logo}/>

        <nav className={styles.header__navigation}>
            <HeaderListComponent linkTo="/main" color={"$main-page-color"} title="Главная"/>
        </nav>

        <p className={styles.header__number}></p>
    </div>
}