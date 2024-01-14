import React from 'react';
import { OrderList } from '@services/generated-api/data-contracts';
import flagActivePath from '@images/flag_active.svg';
import flagUnactivePath from '@images/flag_unactive.svg';
import truckActivePath from '@images/truck_active.svg';
import truckUnactivePath from '@images/truck_unactive.svg';
import styles from './delivery-method-toggle.module.scss';

interface DeliveryMethod extends Pick<OrderList, 'delivery_method'> {}

interface IDeliveryMethodToggle {
	deliveryMethod: DeliveryMethod;
	handleButtonClick: (method: DeliveryMethod) => void;
}

const DeliveryMethodToggle: React.FC<IDeliveryMethodToggle> = ({
	deliveryMethod,
	handleButtonClick,
}) => {
	return (
		<div className={styles.delivery}>
			<button
				className={`${styles.button} ${
					deliveryMethod === ('By courier' as DeliveryMethod) && styles.button__active
				}`}
				onClick={() => {
					handleButtonClick('By courier' as DeliveryMethod);
				}}
			>
				<img
					className={styles.icon}
					src={
						deliveryMethod === ('By courier' as DeliveryMethod)
							? truckActivePath
							: truckUnactivePath
					}
					alt="Иконка доставки курьером"
				/>
				<span className={styles.title}>Доставка</span>
			</button>
			<button
				className={`${styles.button} ${
					deliveryMethod === ('Point of delivery' as DeliveryMethod) &&
					styles.button__active
				}`}
				onClick={() => {
					handleButtonClick('Point of delivery' as DeliveryMethod);
				}}
			>
				<img
					className={styles.icon}
					src={
						deliveryMethod === ('Point of delivery' as DeliveryMethod)
							? flagActivePath
							: flagUnactivePath
					}
					alt="Иконка самостоятельного получения заказа"
				/>
				<span className={styles.title}>Самовывоз</span>
			</button>
		</div>
	);
};

export default DeliveryMethodToggle;
