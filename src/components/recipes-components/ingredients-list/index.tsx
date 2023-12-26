import React from 'react';
import { declOfNum } from '@utils/utils';
import styles from './ingredients-list.module.scss';
import clsx from 'clsx';

type RecipeIngredientsProps = {
	ingredients: {
		amount: number;
		final_price: number;
		id: number;
		ingredient_photo: string;
		measure_unit: string;
		name: string;
		need_to_buy: number;
		quantity_in_recipe: number;
	}[];
};

const IngredientsList: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
	const numOfIngredients = ingredients.length;
	const numeralizeWord = declOfNum(numOfIngredients, [
		'ингредиент',
		'ингредиента',
		'ингредиентов',
	]);

	return (
		<div className={styles.ingredients}>
			<p className={styles.ingredients__head}>
				{`${ingredients.length} ${numeralizeWord}`}
			</p>
			<div className={styles.ingredients__list}>
				{ingredients.map((ingredient, index) => {
					if (ingredient.measure_unit === 'items') {
						ingredient.measure_unit = 'шт';
					} else if (ingredient.measure_unit === 'grams') {
						ingredient.measure_unit = 'гр';
					} else if (ingredient.measure_unit === 'milliliters') {
						ingredient.measure_unit = 'мл';
					}
					return (
						<div key={index} className={clsx(styles.ingredients__item, ingredient)}>
							<div className={styles.ingredient__image}>
								<img
									src={ingredient?.ingredient_photo as string}
									alt={ingredient.name as string}
								/>
							</div>
							<p
								className={styles.ingredient__name}
							>{`${ingredient.name}, ${ingredient.amount}${ingredient.measure_unit}`}</p>
							<p
								className={styles.ingredient__weight}
							>{`${ingredient?.quantity_in_recipe} ${ingredient.measure_unit}`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default IngredientsList;
