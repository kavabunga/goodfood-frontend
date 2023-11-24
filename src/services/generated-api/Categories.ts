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
	Category,
	CategoryCreate,
	ErrorResponse401,
	ErrorResponse403,
	ErrorResponse404,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Categories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the categories
	 *
	 * @tags categories
	 * @name CategoriesList
	 * @summary List all categories
	 * @request GET:/categories/
	 * @secure
	 */
	categoriesList = (params: RequestParams = {}) =>
		this.request<Category, any>({
			path: `/categories/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a category (admin only)
	 *
	 * @tags categories
	 * @name CategoriesCreate
	 * @summary Create category
	 * @request POST:/categories/
	 * @secure
	 */
	categoriesCreate = (data: CategoryCreate, params: RequestParams = {}) =>
		this.request<
			CategoryCreate,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/categories/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a category by its id
	 *
	 * @tags categories
	 * @name CategoriesRead
	 * @summary Get category by id
	 * @request GET:/categories/{id}/
	 * @secure
	 */
	categoriesRead = (id: number, params: RequestParams = {}) =>
		this.request<Category, ErrorResponse404>({
			path: `/categories/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a category by its id (admin only)
	 *
	 * @tags categories
	 * @name CategoriesPartialUpdate
	 * @summary Edit category
	 * @request PATCH:/categories/{id}/
	 * @secure
	 */
	categoriesPartialUpdate = (
		id: number,
		data: CategoryCreate,
		params: RequestParams = {}
	) =>
		this.request<
			CategoryCreate,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/categories/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a category by its id (admin only)
	 *
	 * @tags categories
	 * @name CategoriesDelete
	 * @summary Delete category
	 * @request DELETE:/categories/{id}/
	 * @secure
	 */
	categoriesDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/categories/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
