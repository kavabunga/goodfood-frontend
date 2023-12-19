import React from 'react';
import styles from './slider-item-one.module.scss';
import vegetablesSlider from '@images/vegetables_slider_01.png';
import infoSliderImage from '@images/slider_info_card1.svg';
import { useProfile } from '@hooks/use-profile';

const SliderItemOne: React.FC = () => {
	const { isMobileScreen } = useProfile();

	return (
		<div className={styles.slider__ItemContent}>
			<div className={styles.slider__content}>
				<h1 className={styles.slider__title}>
					<span className={styles.firstLine}>ЕШЬ ПОЛЕЗНО</span>
					<span className={styles.secondLine}>ЖИВИ ЗДОРОВО</span>
				</h1>
			</div>
			<img
				className={styles.slider__image}
				src={isMobileScreen ? infoSliderImage : vegetablesSlider}
				alt="Описание"
			/>
		</div>
	);
};

export default SliderItemOne;
