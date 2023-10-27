/* eslint-disable @typescript-eslint/no-explicit-any */
import { splitIntoSubArrays } from '../../utils/utils';
import styles from './card-catalog-link.module.scss';

type CardCatalogLinkProps = {
	title: string;
	array: Record<string, any>[];
	type: 'card-block-link' | 'product-card';
};

function CardCatalogLink({ title, array, type }: CardCatalogLinkProps) {
	const arrayWithSubArrays = splitIntoSubArrays(array, 3);

	return (
		<div className={styles['card-catalog-link']}>
			<div
				className={`${styles['card-catalog-link__title-container']} ${
					styles[`card-catalog-link__title-container_type_${type}`]
				}`}
			>
				<h2 className={styles['card-catalog-link__title']}>{title}</h2>
				<span className={styles['card-catalog-link__arrow']} />
			</div>
			{arrayWithSubArrays.map((subArray, index) => (
				<ul className={styles['card-catalog-link__list']} key={index}>
					{subArray.map((item: Record<string, any>, index: number) => (
						<li className={styles['card-catalog-link__list-item']} key={index}>
							{type === 'card-block-link' && (
								<div
									style={{
										borderRadius: `16px`,
										width: `100%`,
										height: `200px`,
										backgroundColor: `blue`,
										display: `flex`,
										justifyContent: `center`,
										alignItems: `center`,
										fontSize: `24px`,
										color: `white`,
									}}
								>
									{item.name}
								</div>
							)}
							{type === 'product-card' && (
								<div
									style={{
										borderRadius: `16px`,
										width: `100%`,
										height: `357px`,
										backgroundColor: `red`,
										display: `flex`,
										justifyContent: `center`,
										alignItems: `center`,
										fontSize: `20px`,
										color: `white`,
									}}
								>
									{item.name}
								</div>
							)}
						</li>
					))}
				</ul>
			))}
		</div>
	);
}

export default CardCatalogLink;
