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
	Promotion,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Promotions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the promotions
	 *
	 * @tags promotions
	 * @name PromotionsList
	 * @summary List all promotions
	 * @request GET:/promotions/
	 * @secure
	 */
	promotionsList = (params: RequestParams = {}) =>
		this.request<Promotion, any>({
			path: `/promotions/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a promotion (admin only)
	 *
	 * @tags promotions
	 * @name PromotionsCreate
	 * @summary Create promotion
	 * @request POST:/promotions/
	 * @secure
	 */
	promotionsCreate = (data: Promotion, params: RequestParams = {}) =>
		this.request<
			Promotion,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403
		>({
			path: `/promotions/`,
			method: 'POST',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Retrieves a promotion by its id
	 *
	 * @tags promotions
	 * @name PromotionsRead
	 * @summary Get promotion by id
	 * @request GET:/promotions/{id}/
	 * @secure
	 */
	promotionsRead = (id: number, params: RequestParams = {}) =>
		this.request<Promotion, ErrorResponse404>({
			path: `/promotions/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a promotion by its id (admin only)
	 *
	 * @tags promotions
	 * @name PromotionsPartialUpdate
	 * @summary Edit promotion
	 * @request PATCH:/promotions/{id}/
	 * @secure
	 */
	promotionsPartialUpdate = (id: number, data: Promotion, params: RequestParams = {}) =>
		this.request<
			Promotion,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/promotions/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a promotion by its id (admin only)
	 *
	 * @tags promotions
	 * @name PromotionsDelete
	 * @summary Delete promotion
	 * @request DELETE:/promotions/{id}/
	 * @secure
	 */
	promotionsDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/promotions/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
