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

import { HttpClient, RequestParams } from './http-client';

export class Schema<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
	 *
	 * @tags schema
	 * @name SchemaList
	 * @summary OpenApi3 schema for this API. Format can be selected via content negotiation.
	 * @request GET:/schema/
	 * @secure
	 */
	schemaList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/schema/`,
			method: 'GET',
			secure: true,
			...params,
		});
	/**
	 * No description
	 *
	 * @tags schema
	 * @name SchemaRedocList
	 * @request GET:/schema/redoc/
	 * @secure
	 */
	schemaRedocList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/schema/redoc/`,
			method: 'GET',
			secure: true,
			...params,
		});
	/**
	 * No description
	 *
	 * @tags schema
	 * @name SchemaSwaggerList
	 * @request GET:/schema/swagger/
	 * @secure
	 */
	schemaSwaggerList = (params: RequestParams = {}) =>
		this.request<void, any>({
			path: `/schema/swagger/`,
			method: 'GET',
			secure: true,
			...params,
		});
}
