/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
	ErrorResponse401,
	ErrorResponse403,
	ErrorResponse404,
	FavoriteProductCreate,
	Product,
	ProductCreate,
	ProductUpdate,
	Promotion,
	ValidationErrorResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Products<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the products
	 *
	 * @tags products
	 * @name ProductsList
	 * @summary List all products
	 * @request GET:/products/
	 * @secure
	 */
	productsList = (
		query?: {
			/** name */
			name?: string;
			/** category */
			category?: string;
			/** subcategory */
			subcategory?: string;
			/** producer */
			producer?: string;
			/** components */
			components?: string;
			/** tags */
			tags?: string;
			/** promotions */
			promotions?: string;
			/** discontinued */
			discontinued?: string;
			/** is_favorited */
			is_favorited?: string;
			/** min_price */
			min_price?: string;
			/** max_price */
			max_price?: string;
			/** A page number within the paginated result set. */
			page?: number;
			/** Number of results to return per page. */
			limit?: number;
		},
		params: RequestParams = {}
	) =>
		this.request<Product, any>({
			path: `/products/`,
			method: 'GET',
			query: query,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a product (admin only)
	 *
	 * @tags products
	 * @name ProductsCreate
	 * @summary Create product
	 * @request POST:/products/
	 * @secure
	 */
	productsCreate = (data: ProductCreate, params: RequestParams = {}) =>
		this.request<
			ProductCreate,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/products/`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a product by its id
	 *
	 * @tags products
	 * @name ProductsRead
	 * @summary Get product by id
	 * @request GET:/products/{id}/
	 * @secure
	 */
	productsRead = (id: number, params: RequestParams = {}) =>
		this.request<Product, ErrorResponse404>({
			path: `/products/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a product by its id (admin only)
	 *
	 * @tags products
	 * @name ProductsPartialUpdate
	 * @summary Edit product
	 * @request PATCH:/products/{id}/
	 * @secure
	 */
	productsPartialUpdate = (id: number, data: ProductUpdate, params: RequestParams = {}) =>
		this.request<
			Promotion,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/products/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a product by its id (admin only)
	 *
	 * @tags products
	 * @name ProductsDelete
	 * @summary Delete product
	 * @request DELETE:/products/{id}/
	 * @secure
	 */
	productsDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/products/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
	/**
	 * @description Adds a product to a user's favorites (authorized user only)
	 *
	 * @tags products
	 * @name ProductsFavoriteCreate
	 * @summary Add favorite product
	 * @request POST:/products/{id}/favorite/
	 * @secure
	 */
	productsFavoriteCreate = (
		id: number,
		data: FavoriteProductCreate,
		params: RequestParams = {}
	) =>
		this.request<FavoriteProductCreate, void | ErrorResponse401 | ErrorResponse404>({
			path: `/products/${id}/favorite/`,
			method: 'POST',
			body: data,
			secure: true,
			type: ContentType.Json,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a product from a user's favorites (authorized user only)
	 *
	 * @tags products
	 * @name ProductsFavoriteDelete
	 * @summary Delete favorite product
	 * @request DELETE:/products/{id}/favorite/
	 * @secure
	 */
	productsFavoriteDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, void | ErrorResponse401 | ErrorResponse404>({
			path: `/products/${id}/favorite/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
