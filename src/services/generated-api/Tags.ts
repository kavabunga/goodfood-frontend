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
	Tag,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Tags<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the tags
	 *
	 * @tags tags
	 * @name TagsList
	 * @summary List all tags
	 * @request GET:/tags/
	 * @secure
	 */
	tagsList = (params: RequestParams = {}) =>
		this.request<Tag, any>({
			path: `/tags/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a tag (admin only)
	 *
	 * @tags tags
	 * @name TagsCreate
	 * @summary Create tag
	 * @request POST:/tags/
	 * @secure
	 */
	tagsCreate = (data: Tag, params: RequestParams = {}) =>
		this.request<Tag, ValidationErrorResponse | ErrorResponse401 | ErrorResponse403>({
			path: `/tags/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a tag by its id
	 *
	 * @tags tags
	 * @name TagsRead
	 * @summary Get tag by id
	 * @request GET:/tags/{id}/
	 * @secure
	 */
	tagsRead = (id: number, params: RequestParams = {}) =>
		this.request<Tag, ErrorResponse404>({
			path: `/tags/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a tag by its id (admin only)
	 *
	 * @tags tags
	 * @name TagsPartialUpdate
	 * @summary Edit tag
	 * @request PATCH:/tags/{id}/
	 * @secure
	 */
	tagsPartialUpdate = (id: number, data: Tag, params: RequestParams = {}) =>
		this.request<
			Tag,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/tags/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a tag by its id (admin only)
	 *
	 * @tags tags
	 * @name TagsDelete
	 * @summary Delete tag
	 * @request DELETE:/tags/{id}/
	 * @secure
	 */
	tagsDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/tags/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
