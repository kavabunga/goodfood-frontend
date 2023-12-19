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
	Component,
	ErrorResponse401,
	ErrorResponse403,
	ErrorResponse404,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Components<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the components
	 *
	 * @tags components
	 * @name ComponentsList
	 * @summary List all components
	 * @request GET:/components/
	 * @secure
	 */
	componentsList = (params: RequestParams = {}) =>
		this.request<Component, any>({
			path: `/components/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a component (admin only)
	 *
	 * @tags components
	 * @name ComponentsCreate
	 * @summary Create component
	 * @request POST:/components/
	 * @secure
	 */
	componentsCreate = (data: Component, params: RequestParams = {}) =>
		this.request<
			Component,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/components/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a component by its id
	 *
	 * @tags components
	 * @name ComponentsRead
	 * @summary Get component by id
	 * @request GET:/components/{id}/
	 * @secure
	 */
	componentsRead = (id: number, params: RequestParams = {}) =>
		this.request<Component, ErrorResponse404>({
			path: `/components/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a component by its id (admin only)
	 *
	 * @tags components
	 * @name ComponentsPartialUpdate
	 * @summary Edit component
	 * @request PATCH:/components/{id}/
	 * @secure
	 */
	componentsPartialUpdate = (id: number, data: Component, params: RequestParams = {}) =>
		this.request<
			Component,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/components/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a component by its id (admin only)
	 *
	 * @tags components
	 * @name ComponentsDelete
	 * @summary Delete component
	 * @request DELETE:/components/{id}/
	 * @secure
	 */
	componentsDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/components/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
