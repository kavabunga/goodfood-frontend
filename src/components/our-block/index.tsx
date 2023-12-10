import React, { useEffect, useState } from 'react';
import TopicCard from '@components/topic-card';
import styles from './our-block.module.scss';
import api from '@services/api';
import type { Recipe } from '@services/generated-api/data-contracts';

const OurBlock: React.FC = () => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		api.recipesList().then((recipes) => setRecipes(recipes.slice(0, 3)));
	}, []);

	return (
		<div className={styles['our-blog']}>
			<h2 className={styles['our-blog__title']}>Рецепты</h2>
			<div className={styles['our-blog__topic-list']}>
				{recipes.map((recipe) => {
					return <TopicCard key={recipe.id} recipe={recipe} />;
				})}
			</div>
		</div>
	);
};

export default OurBlock;
