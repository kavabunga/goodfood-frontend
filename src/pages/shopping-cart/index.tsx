import React, { useEffect, useState } from 'react';
import ProductCard from '@components/product-card';
import api from '@services/api';
import ShoppingList from '@components/shopping-list';
import Breadcrumbs from '@components/breadcrumbs';
import { useNavigate } from 'react-router-dom';
import MakingOrderBtn from '@components/making-order-btn';
import { useCart } from '@hooks/use-cart-context.ts';
import Preloader from '@components/preloader';
import { OrderPostAdd, Product } from '@services/generated-api/data-contracts';
import styles from './shopping-cart.module.scss';
import DeliveryMethodToggle from '@components/delivery-method-toggle';

interface DeliveryMethod extends Pick<OrderPostAdd, 'delivery_method'> {}

const ShoppingCart: React.FC = () => {
	const { cartData, clearCart, loading } = useCart();
	const [deliveryMethod, setDeliveryMethod] = React.useState<DeliveryMethod>(
		'By courier' as DeliveryMethod
	);
	const navigate = useNavigate();
	const [promotionProducts, setPromotionProducts] = useState<Product[] | null>(null);

	const randomNumbers = (): number[] => {
		const unicNumbers = new Set();
		while (unicNumbers.size < 4) {
			const randomNumber = Math.floor(Math.random() * 70) + 1;
			unicNumbers.add(Number(randomNumber));
		}
		const result = Array.from(unicNumbers) as number[];
		return result;
	};

	useEffect(() => {
		Promise.all([
			...randomNumbers().map((id) => {
				return api.productsRead(id);
			}),
		])
			.then((products) => setPromotionProducts(products))
			.catch((error) => console.log('Ошибка Promise.all:', error));
	}, []);

	const handleOrderTypeClick = (type: DeliveryMethod) => {
		setDeliveryMethod(type);
	};

	const handleSubmitOrderClick = () => {
		navigate('/cart/order', {
			state: {
				orderType: deliveryMethod,
			},
		});
	};

	const handleClearCart = () => {
		clearCart();
	};

	return (
		<section className={styles.cart}>
			<Breadcrumbs />
			{loading ? (
				<Preloader />
			) : (
				<div className={`${styles['details']}, ${!loading && styles['details-active']}`}>
					<div className={styles.products}>
						<div className={styles.products__title}>
							<h3
								className={styles.products__title_mob}
							>{`${cartData.count_of_products} товаров`}</h3>
							<button
								className={styles.products__btn}
								onClick={handleClearCart}
								disabled={cartData.products.length === 0}
							>
								Очистить корзину
							</button>
						</div>

						{cartData.products.length > 0 && (
							<ShoppingList products={cartData.products} />
						)}
					</div>
					{cartData.products.length > 0 && (
						<div className={styles.details__form}>
							<div className={styles.details__sum}>
								<span>Итого</span>
								<span>
									{cartData.total_price ? `${cartData.total_price.toFixed(2)} руб.` : '0'}
								</span>
							</div>
							<DeliveryMethodToggle
								handleButtonClick={handleOrderTypeClick}
								deliveryMethod={deliveryMethod}
							/>
							<MakingOrderBtn
								onClick={handleSubmitOrderClick}
								disabled={cartData.products.length === 0}
							/>
						</div>
					)}
				</div>
			)}
			{promotionProducts && (
				<div className={styles.cart__recomendation}>
					<h2 className={styles.cart__title}>Вас также может заинтересовать</h2>
					<ul className={styles.cart__advertisement}>
						{promotionProducts.map((product) => (
							<li key={product.id}>
								<ProductCard
									idCard={product.id}
									cardImage={product.photo || ''}
									cardName={product.name}
									price={product.price}
									weight={product.amount || 0}
									measureUnit={product.measure_unit}
									category={product.category?.category_slug}
									is_favorited={product.is_favorited}
									addedClassName="addedCardClassName"
								/>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
};

export default ShoppingCart;
