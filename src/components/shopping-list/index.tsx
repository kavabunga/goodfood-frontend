import React from 'react';
import styles from './shopping-list.module.scss';
import ShoppingItem from '@components/shopping-item';

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
		<div className={styles.products}>
			{products.map((product, index) => (
				<ShoppingItem key={index} product={product} />
			))}
		</div>
	);
};

export default ShoppingList;
