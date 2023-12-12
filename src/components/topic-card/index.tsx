import { Link } from 'react-router-dom';
import type { Recipe } from '@services/generated-api/data-contracts';
import styles from './topic-card.module.scss';

type TopicCardProps = {
	recipe: Recipe;
};

const TopicCard: React.FC<TopicCardProps> = ({ recipe }) => {
	return (
		<li className={styles.card}>
			<Link className={styles.card__link} to={`/recipes/${recipe.id}`}>
				<figure className={styles['card__image-container']}>
					<img
						className={styles.card__image}
						src={recipe.image}
						alt="карточка блога и рецептов"
					/>
					<figcaption className={styles['card__text-container']}>
						<h2 className={styles.card__title}>{recipe.name}</h2>
						<p className={styles.card__description}>{recipe.text}</p>
						<p className={styles.card__date}>{`${recipe.cooking_time} минут`}</p>
					</figcaption>
				</figure>
			</Link>
		</li>
	);
};

export default TopicCard;
