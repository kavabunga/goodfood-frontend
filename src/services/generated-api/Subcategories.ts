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
	Subcategory,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Subcategories<
	SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the subcategories
	 *
	 * @tags subcategories
	 * @name SubcategoriesList
	 * @summary List all subcategories
	 * @request GET:/subcategories/
	 * @secure
	 */
	subcategoriesList = (params: RequestParams = {}) =>
		this.request<Subcategory, any>({
			path: `/subcategories/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a subcategory (admin only)
	 *
	 * @tags subcategories
	 * @name SubcategoriesCreate
	 * @summary Create subcategory
	 * @request POST:/subcategories/
	 * @secure
	 */
	subcategoriesCreate = (data: Subcategory, params: RequestParams = {}) =>
		this.request<
			Subcategory,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/subcategories/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a subcategory by its id
	 *
	 * @tags subcategories
	 * @name SubcategoriesRead
	 * @summary Get subcategory by id
	 * @request GET:/subcategories/{id}/
	 * @secure
	 */
	subcategoriesRead = (id: number, params: RequestParams = {}) =>
		this.request<Subcategory, ErrorResponse404>({
			path: `/subcategories/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a subcategory by its id (admin only)
	 *
	 * @tags subcategories
	 * @name SubcategoriesPartialUpdate
	 * @summary Edit subcategory
	 * @request PATCH:/subcategories/{id}/
	 * @secure
	 */
	subcategoriesPartialUpdate = (
		id: number,
		data: Subcategory,
		params: RequestParams = {}
	) =>
		this.request<
			Subcategory,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/subcategories/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a subcategory by its id (admin only)
	 *
	 * @tags subcategories
	 * @name SubcategoriesDelete
	 * @summary Delete subcategory
	 * @request DELETE:/subcategories/{id}/
	 * @secure
	 */
	subcategoriesDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/subcategories/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
