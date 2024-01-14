import React from 'react';
import ShoppingItem from '@components/shopping-item';
import styles from './shopping-list.module.scss';

type ProductItem = {
	id: number;
	name: string;
	photo: string;
	category: string;
	quantity: number;
	final_price: number;
	total_price: number;
	amount: number;
	measure_unit: string;
};

type CartDataItem = {
	products: ProductItem[];
};

const ShoppingList: React.FC<CartDataItem> = (props) => {
	const { products } = props;

	return (
		<ul className={styles.products}>
			{products.map((product) => (
				<li key={product.id}>
					<ShoppingItem product={product} />
				</li>
			))}
		</ul>
	);
};

export default ShoppingList;
