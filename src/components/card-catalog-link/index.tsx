import React from 'react';
import ProductCard from '../product-card';
import TitleArrowLink from '@components/title-arrow-link';
import styles from './card-catalog-link.module.scss';
import { Product } from '@services/generated-api/data-contracts';

type CardCatalogLinkProps = {
	title: string;
	category: string;
	array: Product[];
};

function CardCatalogLink({ title, array, category }: CardCatalogLinkProps) {
	return (
		<React.Fragment>
			<div className={styles.container}>
				<TitleArrowLink title={title} link={`/catalog/${category}`} type="catalogPage" />
			</div>
			<ul className={styles.stack}>
				{array.map((item: Product) => (
					<li key={item.id}>
						<ProductCard
							cardName={item.name}
							price={item.final_price}
							weight={item.amount}
							cardImage={item.photo}
							category={category}
							idCard={item.id}
							measureUnit={item.measure_unit}
							is_favorited={item.is_favorited}
						/>
					</li>
				))}
			</ul>
		</React.Fragment>
	);
}

export default CardCatalogLink;
