import ButtonsForHeader from '../ButtonsForHeader/ButtonsForHeader';
import style from './ColorCardItem.module.scss';

export default function ColorCardItem({provider, colorMap}) {
    return(
        <>
            {
 colorMap !== null ? <li className={style.list__item}>{provider}   <ButtonsForHeader documentLink={colorMap} colorScheme="blue"/></li> :       <></>      }

        </>
    )
}