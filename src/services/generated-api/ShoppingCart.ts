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
	ShoppingCartGet,
	ShoppingCartPostUpdateDelete,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class ShoppingCart<
	SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the shopping carts of a user (admin or authorized user)
	 *
	 * @tags shopping_cart
	 * @name ShoppingCartList
	 * @summary List all shopping carts
	 * @request GET:/shopping_cart/
	 * @secure
	 */
	shoppingCartList = (params: RequestParams = {}) =>
		this.request<ShoppingCartGet, ErrorResponse401 | ErrorResponse403>({
			path: `/shopping_cart/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a shopping cart of a user (authorized only)
	 *
	 * @tags shopping_cart
	 * @name ShoppingCartCreate
	 * @summary Create shopping cart
	 * @request POST:/shopping_cart/
	 * @secure
	 */
	shoppingCartCreate = (data: ShoppingCartPostUpdateDelete, params: RequestParams = {}) =>
		this.request<
			ShoppingCartPostUpdateDelete,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/shopping_cart/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a shopping cart of a user by its id (admin or authorized user)
	 *
	 * @tags shopping_cart
	 * @name ShoppingCartRead
	 * @summary Get shopping cart by id
	 * @request GET:/shopping_cart/{id}/
	 * @secure
	 */
	shoppingCartRead = (id: number, params: RequestParams = {}) =>
		this.request<ShoppingCartGet, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>(
			{
				path: `/shopping_cart/${id}/`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params,
			}
		);
	/**
	 * @description Edits a shopping cart by its id (authorized only)
	 *
	 * @tags shopping_cart
	 * @name ShoppingCartPartialUpdate
	 * @summary Edit shopping cart
	 * @request PATCH:/shopping_cart/{id}/
	 * @secure
	 */
	shoppingCartPartialUpdate = (
		id: number,
		data: ShoppingCartPostUpdateDelete,
		params: RequestParams = {}
	) =>
		this.request<
			ShoppingCartPostUpdateDelete,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/shopping_cart/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a shopping cart by its id (authorized only)
	 *
	 * @tags shopping_cart
	 * @name ShoppingCartDelete
	 * @summary Delete shopping cart
	 * @request DELETE:/shopping_cart/{id}/
	 * @secure
	 */
	shoppingCartDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/shopping_cart/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
