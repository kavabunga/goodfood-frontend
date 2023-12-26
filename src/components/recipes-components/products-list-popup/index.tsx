import React from 'react';
import styles from './products-list-popup.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import closeIcon from '@images/profile/close.svg';
import plusIcon from '@images/plus_button.svg';
import minusIcon from '@images/minus_button.svg';

type ReceipeIngredient = {
	amount: number;
	final_price: number;
	id: number;
	ingredient_photo: string;
	measure_unit: string;
	name: string;
	need_to_buy: number;
	quantity_in_recipe: number;
};

type RecipeIngredientsProps = {
	ingredients: ReceipeIngredient[];
};

const ProductsListPopup: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
	const [products, setProducts] = useState<ReceipeIngredient[]>(Array);

	const filterProducts = (index: number) => {
		setProducts((prev) => prev.filter((_, i) => i !== index));
	};

	const changeAmount = (index: number) => {
		return (newAmount: number) => {
			setProducts(
				products?.map((product, i) => {
					if (i === index) {
						product.need_to_buy = Math.min(Math.max(newAmount, 1), 20);
					}
					return product;
				})
			);
		};
	};

	React.useEffect(() => {
		if (!ingredients) {
			return;
		}

		setProducts(ingredients);
	}, [ingredients]);

	return (
		products && (
			<div className={styles['products-popup']}>
				<h3 className={styles['products-popup__title']}>Товары в корзину</h3>
				<ul className={styles['products-popup__list']}>
					{products.map((product, index) => (
						<li
							className={clsx(styles['products-popup__item'], styles.product)}
							key={product.name}
						>
							<div className={styles.product__image}>
								<img src={product.ingredient_photo} alt={product.name} />
							</div>
							<p
								className={styles.product__name}
							>{`${product.name}, ${product.amount}${product.measure_unit}`}</p>

							<div className={clsx(styles.product__counter, styles.counter)}>
								<button
									className={styles.counter__button}
									onClick={() =>
										product.need_to_buy && changeAmount(index)(product.need_to_buy - 1)
									}
								>
									<img src={minusIcon} alt="минус" />
								</button>
								<p className={styles.counter__value}>{product.need_to_buy}</p>
								<button
									className={styles.counter__button}
									onClick={() =>
										product.need_to_buy && changeAmount(index)(product.need_to_buy + 1)
									}
								>
									<img src={plusIcon} alt="плюс" />
								</button>
							</div>

							{product.final_price && product.need_to_buy && (
								<p className={styles.product__price}>{`${
									product.final_price * product.need_to_buy
								} руб.`}</p>
							)}
							<button
								onClick={() => filterProducts(index)}
								className={styles.product__delete}
								type="button"
							>
								<img src={closeIcon} alt="удалить" />
							</button>
						</li>
					))}
				</ul>
				<button className={styles['products-popup__button']}>Добавить в корзину</button>
			</div>
		)
	);
};

export default ProductsListPopup;
