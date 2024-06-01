import styles from './AboutCompanySlider.module.scss';
import pic1 from '../../images/slider-pic-1.png';

export default function AboutCompanySlider() {
	return <span className={styles.slider__wrapper}>
		<span className={styles.slider__wrapper__imgBlock}>
			<img src={pic1} alt="sliders_image" />
		</span>
		<span className={styles.slider__wrapper__textBlock}>
			<h3 className={styles.slider__wrapper__textBlock__text}> Занимаемся <br/> натяжкой трафаретных <br/> сеток на рамы</h3>
			<span className={styles.slider__wrapper__textBlock__buttons}>

			</span>
		</span>


	</span>
}