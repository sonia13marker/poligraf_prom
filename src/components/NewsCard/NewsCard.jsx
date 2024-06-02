import styles from './NewsCard.module.scss';
import {Link} from "react-router-dom";

export default function NewsCard({title, tag, image}) {
	return <div className={styles.wrapper}>
		{/*сделать тег отдельным компонентом!!*/}
		<span className={styles.wrapper__tag}>
{tag}
		</span>

		<img src={image === undefined ? "Нет картинки" : image} alt="" className={styles.wrapper__image} />

		<span className={styles.wrapper__textBlock}>
			<h4 className={styles.wrapper__textBlock__title}>
{title}
			</h4>

			<Link to={"/"} className={styles.wrapper__textBlock__button}>
Читать
			</Link>
		</span>

	</div>
}