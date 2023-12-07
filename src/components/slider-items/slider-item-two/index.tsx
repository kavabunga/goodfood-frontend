import React from 'react';
import styles from '../slider-item-two/slider-item-two.module.scss';
import vegetablesSlider from '@images/vegetables_slider_02.png';
import infoSliderImage from '@images/slider_info_card2.svg';
import { useProfile } from '@hooks/use-profile';

const SliderItemTwo: React.FC = () => {
	const { isMobileScreen } = useProfile();
	return (
		<div className={styles.slider__ItemContent}>
			<div className={styles.slider__content}>
				<h1 className={styles.slider__title}>
					<span className={styles.firstLine}>Попробуйте новинку</span>
					<span className={styles.secondLine}>недели</span>
				</h1>
			</div>
			<img
				className={styles.slider__image}
				src={isMobileScreen ? infoSliderImage : vegetablesSlider}
				alt="Описание"
			/>
			<p className={styles.slider__imageText}>Классический тофу</p>
		</div>
	);
};

export default SliderItemTwo;
