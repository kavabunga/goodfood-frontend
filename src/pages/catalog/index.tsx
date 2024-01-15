import React, { useEffect, useState } from 'react';
import styles from './catalog.module.scss';
import SliderComponent from '@components/slider-component';
import CardCatalogLink from '@components/card-catalog-link';
import api from '@services/api.ts';
import Preloader from '@components/preloader';
import Breadcrumbs from '@components/breadcrumbs';
import { Product } from '@services/generated-api/data-contracts';

type Catalog = {
	id: number;
	name: string;
	slug: string;
	top_products: Product[];
};

const Catalog: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [catalogs, setCatalogs] = useState<Catalog[]>([]);

	useEffect(() => {
		setIsLoading(true);
		api
			.categoriesList()
			.then((data) => {
				setCatalogs(data);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<SliderComponent />
			{isLoading ? (
				<Preloader />
			) : (
				<section className={styles.section}>
					<Breadcrumbs />
					<h1 className={styles.title}>Каталог товаров</h1>
					<ul className={`${styles.list}, ${!isLoading && styles.listActive}`}>
						{catalogs.map((catalog) => (
							<li key={catalog.id} className={styles.item}>
								<CardCatalogLink
									title={catalog.name}
									category={catalog.slug}
									array={catalog.top_products.slice(0, 3)}
								/>
							</li>
						))}
					</ul>
				</section>
			)}
		</>
	);
};

export default Catalog;
