import {NavLink} from "react-router-dom";
import styles from "./HeaderListComponent.module.scss";
import '../../style.module.scss';

export default function HeaderListComponent({links}) {


    return <nav className={styles.listComponent}>
        {links.map((link, index) => (
            <NavLink
            key={index}
            to={link.to}
            className={`${styles.listComponent__component} ${styles[link.colorClass]}`}
            > {link.name} </NavLink>
        ))}
        {/*<NavLink to={linkTo} style={colorStyle} className={styles.listComponent__component}>{title}</NavLink>*/}
    </nav>
}