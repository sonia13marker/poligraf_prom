import {NavLink} from "react-router-dom";
import styles from "./HeaderListComponent.module.scss";
import '../../style.module.scss';

export default function HeaderListComponent({linkTo, color, title}) {
      const colorStyle = {
          backgroundColor: color,
     };
      console.log(color);

    return <span className={styles.listComponent}>
        <NavLink to={linkTo} style={colorStyle} className={styles.listComponent__component}>{title}</NavLink>
    </span>
}