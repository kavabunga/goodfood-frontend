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
	Producer,
	ValidationErrorResponse,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Producers<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description Returns a list of all the producers
	 *
	 * @tags producers
	 * @name ProducersList
	 * @summary List all producers
	 * @request GET:/producers/
	 * @secure
	 */
	producersList = (params: RequestParams = {}) =>
		this.request<Producer, any>({
			path: `/producers/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Creates a producer (admin only)
	 *
	 * @tags producers
	 * @name ProducersCreate
	 * @summary Create producer
	 * @request POST:/producers/
	 * @secure
	 */
	producersCreate = (data: Producer, params: RequestParams = {}) =>
		this.request<Producer, ValidationErrorResponse | ErrorResponse401 | ErrorResponse403>(
			{
				path: `/producers/`,
				method: 'POST',
				body: data,
				secure: true,
				format: 'json',
				...params,
			}
		);
	/**
	 * @description Retrieves a producer by its id
	 *
	 * @tags producers
	 * @name ProducersRead
	 * @summary Get producer by id
	 * @request GET:/producers/{id}/
	 * @secure
	 */
	producersRead = (id: number, params: RequestParams = {}) =>
		this.request<Producer, ErrorResponse404>({
			path: `/producers/${id}/`,
			method: 'GET',
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Edits a producer by its id (admin only)
	 *
	 * @tags producers
	 * @name ProducersPartialUpdate
	 * @summary Edit producer
	 * @request PATCH:/producers/{id}/
	 * @secure
	 */
	producersPartialUpdate = (id: number, data: Producer, params: RequestParams = {}) =>
		this.request<
			Producer,
			ValidationErrorResponse | ErrorResponse401 | ErrorResponse403 | ErrorResponse404
		>({
			path: `/producers/${id}/`,
			method: 'PATCH',
			body: data,
			secure: true,
			format: 'json',
			...params,
		});
	/**
	 * @description Deletes a producer by its id (admin only)
	 *
	 * @tags producers
	 * @name ProducersDelete
	 * @summary Delete producer
	 * @request DELETE:/producers/{id}/
	 * @secure
	 */
	producersDelete = (id: number, params: RequestParams = {}) =>
		this.request<void, ErrorResponse401 | ErrorResponse403 | ErrorResponse404>({
			path: `/producers/${id}/`,
			method: 'DELETE',
			secure: true,
			...params,
		});
}
