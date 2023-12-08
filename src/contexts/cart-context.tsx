import React, { createContext, ReactNode, useEffect, useState } from 'react';
import api from '@services/api.ts';

type CartProviderProps = {
	children: ReactNode;
};

type Product = {
	id: number;
	quantity: number;
};

type ShoppingCartItem = {
	products: Product[];
};

type ProductItem = {
	id: number;
	name: string;
	quantity: number;
	final_price: number;
	created_at: number;
};

type CartDataItem = {
	count_of_products: number;
	products: ProductItem[];
	total_price: number;
};

type CartContextType = {
	cartData: CartDataItem;
	loadCartData: () => void;
	updateCart: (id: number, quantity: number) => void;
	deleteCart: (id: number) => void;
	addItemToCart: (id: number) => void;
	removeItemFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
	cartData: {
		count_of_products: 0,
		products: [],
		total_price: 0,
	},
	loadCartData: () => {},
	updateCart: () => {},
	deleteCart: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartData, setCartData] = useState<CartDataItem>({
		count_of_products: 0,
		products: [],
		total_price: 0,
	});

	const loadCartData = () => {
		api
			.usersShoppingCartList()
			.then((data) => {
				setCartData(data);
			})
			.catch((error) => {
				console.error('Error loading cart data:', error);
			});
	};

	const updateCart = (idProduct: number, quantityProduct: number) => {
		const updatedCartItem: ShoppingCartItem = {
			products: [
				{
					id: idProduct,
					quantity: quantityProduct,
				},
			],
		};

		api
			.usersShoppingCartCreate(updatedCartItem)
			.then((data) => {
				setCartData((prevCartData) => ({
					...prevCartData,
					...data,
				}));
			})
			.catch((error) => {
				console.error('Error updating cart:', error);
			});
	};

	const deleteCart = (idProduct: number) => {
		api
			.usersShoppingCartDelete(idProduct)
			.finally(() => {
				loadCartData();
			})
			.catch((error) => {
				console.error('Error deleting cart item:', error);
			});
	};

	const addItemToCart = (productId: number) => {
		const existingProductIndex = cartData.products.findIndex(
			(product) => product.id === productId
		);

		if (existingProductIndex !== -1) {
			cartData.products[existingProductIndex].quantity += 1;
		}

		// Обновляем контекст корзины с обновленными данными
		updateCart(productId, cartData.products[existingProductIndex]?.quantity);
	};

	const removeItemFromCart = (productId: number) => {
		const existingItemIndex = cartData.products.findIndex(
			(item) => item.id === productId
		);

		if (existingItemIndex !== -1) {
			const existingItem = cartData.products[existingItemIndex];

			if (existingItem.quantity > 1) {
				existingItem.quantity -= 1;
			}

			updateCart(productId, existingItem?.quantity || 0);
		}
	};

	useEffect(() => {
		loadCartData();
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartData,
				loadCartData,
				updateCart,
				deleteCart,
				addItemToCart,
				removeItemFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
