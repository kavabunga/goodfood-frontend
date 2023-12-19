/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ErrorResponse401, ErrorResponse403, FavoriteProduct } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class FavoriteProducts<
	SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the favorite products of all users (admin only)
	 *
	 * @tags favorite-products
	 * @name FavoriteProductsList
	 * @summary List all favorite products
	 * @request GET:/favorite-products/
	 * @secure
	 */
	favoriteProductsList = (params: RequestParams = {}) =>
		this.request<FavoriteProduct, ErrorResponse401 | ErrorResponse403>({
			path: `/favorite-products/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a record about the user and his or her favorite product by id of this record (admin only)
	 *
	 * @tags favorite-products
	 * @name FavoriteProductsRead
	 * @summary Get favorite product by id
	 * @request GET:/favorite-products/{id}/
	 * @secure
	 */
	favoriteProductsRead = (id: number, params: RequestParams = {}) =>
		this.request<FavoriteProduct, ErrorResponse401 | ErrorResponse403>({
			path: `/favorite-products/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
}
