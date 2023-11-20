import React, { useEffect, useState } from 'react';
import ProductCard from '@components/product-card';
import styles from './category.module.scss';
import api from '@services/api.ts';
import { useParams } from 'react-router';
import Preloader from '@components/preloader';
import SliderComponent from '@components/slider-component';
import Breadcrumbs from '@components/breadcrumbs';
import type { Product } from '@services/generated-api/data-contracts';
import filter from '@images/Filter.png';

// type CategoryType = {
// 	id: number;
// 	name: string;
// 	price: number;
// 	amount: number;
// 	photo: string;
// 	top_three_products: Record<string, unknown>[];
// 	category: {
// 		category_name: string;
// 	};
// };

const Category: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [categoryItem, setCategoryItem] = useState<Product[]>([]);

	const { category } = useParams();

	useEffect(() => {
		setIsLoading(true);
		api
			.productsList(`?category=${category}`)
			.then((data) => {
				setCategoryItem(data.results);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [category]);

	console.log(categoryItem);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SliderComponent />
			<section className={styles.category}>
				{isLoading ? (
					<Preloader />
				) : (
					<div
						className={`${styles['category__content']}, ${
							!isLoading && styles['category__content-active']
						}`}
					>
						<Breadcrumbs />
						<div className={styles['category__sorting']}>
							<img src={filter} alt="filter" />
							<p>↑это картинка заглушка↑</p>
						</div>
						<div className={styles['category__product']}>
							<h1 className={styles['category__product-title']}>
								{categoryItem[0]?.category?.category_name}
							</h1>
							<ul className={styles['product__product-container']}>
								{categoryItem.map((item) => (
									<li key={item.id}>
										<ProductCard
											cardName={item.name}
											price={item.price}
											weight={item.amount || 0}
											cardImage={item.photo || ''}
											idCard={item.id}
											category={category}
											measureUnit={item.measure_unit}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default Category;
