// THIS IS AN AUTOGENERATED FILE, ANY CHANGES WILL BE LOST. DO NO EDIT THIS FILE

/* TODO:
include creation date
include version of generator
*/

import * as express from 'express';
import * as http from 'http';

var ospreyRouter = require('osprey-router');
var ospreyMethodHandler = require('osprey-method-handler');

export class HttpError extends Error {
	constructor(public code: number, message?: string, public data?: any) {
		super(message);
	}

	toString(): string {
		return this.message || http.STATUS_CODES[this.code] || `Error ${this.code.toString()}`;
	}
}

export namespace HttpError {

	export abstract class ClientError extends HttpError {
		constructor(message?: string, data?: any) {
			super(400, message, data);
		}
	}
	export abstract class ServerError extends HttpError {
		constructor(message?: string, data?: any) {
			super(500, message, data);
		}
	}

	/** HTTP 400 */
	export class BadRequest extends ClientError { code = 400; }
	/** HTTP 401 */
	export class Unauthorized extends ClientError { code = 401; }
	/** HTTP 403 */
	export class Forbidden extends ClientError { code = 403; }
	/** HTTP 404 */
	export class NotFound extends ClientError { code = 404; }
	/** HTTP 406 */
	export class NotAccpetable extends ClientError { code = 406; }
	/** HTTP 408 */
	export class RequestTimeout extends ClientError { code = 408; }
	/** HTTP 410 */
	export class Gone extends ClientError { code = 410; }
	/** HTTP 415 */
	export class UnsupportedMediaType extends ClientError { code = 415; }

	/** HTTP 500 */
	export class InternalServerError extends ServerError { code = 500; }
	/** HTTP 501 */
	export class NotImplemented extends ServerError { code = 501; }
	/** HTTP 502 */
	export class BadGateway extends ServerError { code = 502; }
	/** HTTP 503 */
	export class ServiceUnavaliable extends ServerError { code = 503; }
	/** HTTP 504 */
	export class GatewayTimeout extends ServerError { code = 504; }
}

export interface Dictionary<T> { [key: string]: T; }

export interface IParameter extends Dictionary<any> {
	name: string;
	__propertyName: string;
	displayName?: string;
	description?: string;
	type?: string;
	required?: boolean;
	minimum?: number;
	maximum?: number;
	default?: any;
	minLength?: number;
	maxLength?: number;
	pattern?: string;
	example?: any;
	repeat?: any;
}

export interface IUriParameter extends IParameter { }
export interface IQueryStringParameter extends IParameter { }
export interface IHeader extends IParameter { }

export interface IMethodVerb {
	body: any;
	responses: Dictionary<any>;
	headers: Dictionary<IParameter>;
	queryParameters: Dictionary<IParameter>;
}

export interface IMethod {
	body?: boolean;
	securedBy: string[];
	descriptor: IMethodVerb;
}

export interface IControllerDescriptor {
	baseUri: string;
	methods: Dictionary<IMethod>;
	uriParameters: IUriParameter[];
}

/// DemoApi v1
export namespace DemoApi_V1 {


	var theRouter = ospreyRouter();

	const contextSymbol = Symbol('request-context');

	export class BaseControllerResponse<T> {
		status: number = 200;
		mime: string;
		headers: Dictionary<any> = {};
		constructor(public data?: T) { }
	}

	export function getMiddleware() {
		return theRouter;
	}

	export function getContext(expressRequest: express.Request): IContext {
		return (expressRequest[contextSymbol] = (expressRequest[contextSymbol] || {})) as IContext;
	}

	export var ospreyHandlerOptions = {
		discardUnknownBodies: false,
		discardUnknownQueryParameters: false,
		discardUnknownHeaders: false,
		parseBodiesOnWildcard: false,
		reviver: null as any,
		limit: 100 * 1024 * 1024,
		parameterLimit: 1000
	};

	export namespace SecurityMiddlewares {
		export const securitySettings = { "myCustomSec": { "description": "Uses a \"token\" query string", "describedBy": { "queryParameters": { "token": { "description": "provide token", "type": "string", "example": "ABS-SDF" } } }, "type": "x-myCustomSec" } };

		export function no_authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
			next();
		}

		/** x-myCustomSec implementation */
		export function myCustomSec(req: express.Request, res: express.Response, next: express.NextFunction) {
			console.warn("Warning! SecurityMiddlewares." + "myCustomSec" + " is not implemented!");
			next();
		}

	}

	namespace SecurityMiddlewaresInvokers {
		export const no_authenticate = (req: express.Request, res: express.Response, next) => SecurityMiddlewares.no_authenticate(req, res, next);
		export const myCustomSec = (req: express.Request, res: express.Response, next) => SecurityMiddlewares.myCustomSec(req, res, next);
	}

	export var httpErrorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
		res.status(err.status);
		res.send({ message: err.message, status: err.status });
		next(err);
	};

	const middlewareIterator = function(list, i, req, res, next) {
		var mid = list[i];
		if (!mid) return next();
		mid(req, res, function(err) {
			if (err) return next(err);
			middlewareIterator(list, i + 1, req, res, next);
		});
	}

	/**
	 * @param {Array} list of middleware to combine
	 */
	function concatMiddlewares(list) {
		return function(req, res, next) {
			try {
				middlewareIterator(list, 0, req, res, (error) => {
					if (error instanceof HttpError) {
						httpErrorHandler(error, req, res, next);
					} else {
						next(error);
					}
				});
			} catch (error) {
				if (error instanceof HttpError) {
					httpErrorHandler(error, req, res, next);
				} else {
					next(error);
				}
			}
		}
	}

	export class BaseController {
		descriptor: any;

		uriParameters: Dictionary<any>;

		currentContext: {
			request: express.Request,
			response: express.Response,
			context: IContext
		};

		/** Register this resource in the specified osprey-router. */
		registerRouter(ospreyRouter?) {
			let descriptor: IControllerDescriptor = this.descriptor;

			if (!ospreyRouter)
				ospreyRouter = theRouter;

			for (let verb in descriptor.methods) {
				let method = descriptor.methods[verb];

				var uriParameters: Dictionary<any> = {};

				descriptor.uriParameters.forEach(x => uriParameters[x.__propertyName] = x);

				ospreyRouter[verb](
					descriptor.baseUri,
					uriParameters,
					this.getRequestHandler(verb, method)
				);
			}
		}

		private generateQueryStringParams(params: Dictionary<IQueryStringParameter>) {
			var queryString = {};
			for (let i in params) {
				let parameter = params[i];
				queryString[parameter.__propertyName] = parameter.name in this.currentContext.request.query ? this.currentContext.request.query[parameter.name] : parameter.default;
			}
			return queryString;
		}

		private generateHeaderParams(headers: Dictionary<IHeader>) {
			var ret = {};
			for (let i in headers) {
				let header = headers[i];
				ret[header.__propertyName] = this.currentContext.request.get(header.name) || header.default;
			}
			return ret;
		}

		private getRequestHandler(name: string, method: IMethod) {
			let middlewares = [];

			if (method.securedBy && method.securedBy.length) {
				middlewares = middlewares.concat(
					method
						.securedBy
						.map(securitySchema => SecurityMiddlewaresInvokers[securitySchema])
				);
			} else {
				middlewares.push(SecurityMiddlewaresInvokers.no_authenticate);
			}

			if (method.descriptor) {
				middlewares.push(ospreyMethodHandler(method.descriptor, ospreyHandlerOptions));
			}

			middlewares.push((req, res, next) => {
				this.setUpCurrentContext(req, res);

				let args = [];

				try {

					if (method.body) {
						args.push(this.currentContext.request.body);
					}

					if (method.descriptor.queryParameters) {
						args.push(this.generateQueryStringParams(method.descriptor.queryParameters));
					}

					if (method.descriptor.headers) {
						args.push(this.generateHeaderParams(method.descriptor.headers));
					}

					this[name]
						.apply(this, args).then((r: BaseControllerResponse<any>) => {
							// if there is no results, bypass
							if (!r) {
								next();
								return;
							}

							// Typed response
							if (r && r instanceof BaseControllerResponse) {
								res.status(r.status);

								if (r.mime) {
									res.set('Content-Type', r.mime);
								}

								if (r.headers) {
									for (var header in r.headers) {
										res.append(header, r.headers[header]);
									}
								}

								if (r.mime == 'application/json') {
									res.json(r.data);
								} else {
									res.send(r.data);
								}

								return;
							}

							if (r instanceof HttpError) {
								return httpErrorHandler(r as any, req, res, next);
							}

							if (r && r instanceof Error) {
								next(r);
								return;
							}

							next(new Error('Unknown method result ' + name.toUpperCase() + ' ' + this.descriptor.baseUri));
						})
						.catch((error) => {
							if (error instanceof HttpError) {
								httpErrorHandler(error, req, res, next);
							} else {
								next(error);
							}
						});
				} catch (e) {
					if (e instanceof HttpError) {
						return httpErrorHandler(e, req, res, next);
					} else {
						next(e);
					}
				}
			});


			return concatMiddlewares(
				middlewares
			);
		}

		setUpCurrentContext(req: express.Request, res: express.Response, ctx?: IContext) {
			this.currentContext = {
				request: req,
				response: res,
				context: getContext(req)
			};

			this.fillUriParameters(this.currentContext.request.params);
		}

		private fillUriParameters(params: Dictionary<any>) {
			if (!params) return;
			let descriptor: IControllerDescriptor = this.descriptor;
			for (let paramIndex in descriptor.uriParameters) {
				let param = descriptor.uriParameters[paramIndex];
				if (param.name in params) {
					this.uriParameters[param.__propertyName] = params[param.name];
				}
			}
		}
	}

	export interface IGetMe200 {
		name: string;
		company?: string;
		[k: string]: any;
	}export interface IGetUserById200 {
		name?: string;
		company?: string;
		[k: string]: any;
	}
	export interface IGetUserById2000 {
		filter?: string;
		results?: IGetUserById200[];
		[k: string]: any;
	}




	/** 
	 * /me
	 * 
	 */
	export namespace Me {



		export class GetResult200 extends BaseControllerResponse<IGetMe200> { status = 200; mime = "application/json" }
		export type GetResults = GetResult200 | void;

		/** 
		* /me abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/me";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": {
									"body": {
										"application/json": {
											"schema": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"/\",\"type\":\"object\",\"properties\":{\"name\":{\"id\":\"name\",\"type\":\"string\"},\"company\":{\"id\":\"company\",\"type\":\"string\"}},\"required\":[\"name\"]}\n",
											"interface": {
												"tsCode": "export interface IGetMe200 {\n  name: string;\n  company?: string;\n  [k: string]: any;\n}",
												"name": "IGetMe200"
											}
										}
									}
								}
							},
							"queryParameters": {}
						}
					}
				},
				"baseUri": "/me",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(): Promise<GetResults>;
		}
	}



	/** 
	 * /me/payments
	 * 
	 */
	export namespace Me.Payments {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /me/payments abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/me/payments";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [
							"myCustomSec"
						],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {}
						}
					}
				},
				"baseUri": "/me/payments",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(): Promise<GetResults>;
		}
	}




	/** 
	 * /users/{userId}
	 * 
	 */
	export namespace UserById {



		export class GetResult200 extends BaseControllerResponse<IGetUserById2000> { status = 200; mime = "application/json" }
		export type GetResults = GetResult200 | void;

		/** 
		* /users/{userId} abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/users/{userId}";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": {
									"body": {
										"application/json": {
											"schema": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"/\",\"type\":\"object\",\"properties\":{\"filter\":{\"id\":\"filter\",\"type\":\"string\"},\"results\":{\"id\":\"results\",\"type\":\"array\",\"items\":{\"id\":\"0\",\"type\":\"object\",\"properties\":{\"name\":{\"id\":\"name\",\"type\":\"string\"},\"company\":{\"id\":\"company\",\"type\":\"string\"}}}}}}\n",
											"interface": {
												"tsCode": "export interface IGetUserById200 {\n  name?: string;\n  company?: string;\n  [k: string]: any;\n}\nexport interface IGetUserById2000 {\n  filter?: string;\n  results?: IGetUserById200[];\n  [k: string]: any;\n}",
												"name": "IGetUserById2000"
											}
										}
									}
								}
							},
							"queryParameters": {
								"filter": {
									"displayName": "filter",
									"type": "string",
									"__propertyName": "filter",
									"name": "filter",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/users/{userId}",
				"uriParameters": [
					{
						"displayName": "userId",
						"type": "string",
						"required": true,
						"__propertyName": "userId",
						"name": "userId",
						"description": ""
					}
				]
			};
			uriParameters = {
				userId: void (0) as string
			};

			/** get method */
			abstract async get(
				queryString: {
					/** string.  */
					filter?: string;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /status
	 * 
	 */
	export namespace Status {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		/* Response get status 202 do not describe any schema nor MIME */
		export class GetResult202 extends BaseControllerResponse<any> { status = 202; }
		/* Response get status 401 do not describe any schema nor MIME */
		export class GetResult401 extends BaseControllerResponse<any> { status = 401; }
		/* Response get status 404 do not describe any schema nor MIME */
		export class GetResult404 extends BaseControllerResponse<any> { status = 404; }
		/* Response get status 500 do not describe any schema nor MIME */
		export class GetResult500 extends BaseControllerResponse<any> { status = 500; }
		/* Response get status 505 do not describe any schema nor MIME */
		export class GetResult505 extends BaseControllerResponse<any> { status = 505; }
		export type GetResults = GetResult200 | GetResult202 | GetResult401 | GetResult404 | GetResult500 | GetResult505 | void;

		/** 
		* /status abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/status";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null,
								"202": null,
								"401": null,
								"404": null,
								"500": null,
								"505": null
							},
							"queryParameters": {
								"desiredStatus": {
									"displayName": "desiredStatus",
									"type": "integer",
									"required": true,
									"__propertyName": "desiredStatus",
									"name": "desiredStatus",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/status",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], integer.  */
					desiredStatus: number;
				}
			): Promise<GetResults>;
		}
	}




	/** 
	 * /required/boolean
	 * 
	 */
	export namespace Required.Boolean {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /required/boolean abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/required/boolean";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "boolean",
									"required": true,
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/required/boolean",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], boolean.  */
					param: boolean;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /required/date
	 * 
	 */
	export namespace Required.Date {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /required/date abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/required/date";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "date",
									"required": true,
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/required/date",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], date.  */
					param: Date;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /required/integer
	 * 
	 */
	export namespace Required.Integer {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /required/integer abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/required/integer";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "integer",
									"required": true,
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/required/integer",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], integer.  */
					param: number;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /required/number
	 * 
	 */
	export namespace Required.Number {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /required/number abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/required/number";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "number",
									"required": true,
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/required/number",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], number.  */
					param: number;
				}
			): Promise<GetResults>;
		}
	}




	/** 
	 * /non-required/boolean
	 * 
	 */
	export namespace Non.Required.Boolean {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /non-required/boolean abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/non-required/boolean";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "boolean",
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/non-required/boolean",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** boolean.  */
					param?: boolean;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /non-required/date
	 * 
	 */
	export namespace Non.Required.Date {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /non-required/date abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/non-required/date";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "date",
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/non-required/date",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** date.  */
					param?: Date;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /non-required/integer
	 * 
	 */
	export namespace Non.Required.Integer {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /non-required/integer abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/non-required/integer";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "integer",
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/non-required/integer",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** integer.  */
					param?: number;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /non-required/number
	 * 
	 */
	export namespace Non.Required.Number {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;

		/** 
		* /non-required/number abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/non-required/number";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"param": {
									"displayName": "param",
									"type": "number",
									"__propertyName": "param",
									"name": "param",
									"description": ""
								}
							}
						}
					}
				},
				"baseUri": "/non-required/number",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** number.  */
					param?: number;
				}
			): Promise<GetResults>;
		}
	}



	/** 
	 * /crud
	 * 
	 */
	export namespace Crud {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		export type GetResults = GetResult200 | void;



		/* Response put status 200 do not describe any schema nor MIME */
		export class PutResult200 extends BaseControllerResponse<any> { status = 200; }
		export type PutResults = PutResult200 | void;



		/* Response post status 201 do not describe any schema nor MIME */
		export class PostResult201 extends BaseControllerResponse<any> { status = 201; }
		export type PostResults = PostResult201 | void;



		/* Response patch status 200 do not describe any schema nor MIME */
		export class PatchResult200 extends BaseControllerResponse<any> { status = 200; }
		/* Response patch status 404 do not describe any schema nor MIME */
		export class PatchResult404 extends BaseControllerResponse<any> { status = 404; }
		export type PatchResults = PatchResult200 | PatchResult404 | void;



		/* Response delete status 200 do not describe any schema nor MIME */
		export class DeleteResult200 extends BaseControllerResponse<any> { status = 200; }
		/* Response delete status 204 do not describe any schema nor MIME */
		export class DeleteResult204 extends BaseControllerResponse<any> { status = 204; }
		/* Response delete status 404 do not describe any schema nor MIME */
		export class DeleteResult404 extends BaseControllerResponse<any> { status = 404; }
		export type DeleteResults = DeleteResult200 | DeleteResult204 | DeleteResult404 | void;

		/** 
		* /crud abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/crud";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {
								"id": {
									"displayName": "id",
									"type": "integer",
									"required": true,
									"__propertyName": "id",
									"name": "id",
									"description": "Resource ID"
								}
							}
						}
					},
					"put": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null
							},
							"queryParameters": {}
						}
					},
					"post": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"201": null
							},
							"queryParameters": {}
						}
					},
					"patch": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null,
								"404": null
							},
							"queryParameters": {}
						}
					},
					"delete": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null,
								"204": null,
								"404": null
							},
							"queryParameters": {}
						}
					}
				},
				"baseUri": "/crud",
				"uriParameters": []
			};
			uriParameters = {

			};

			/** get method */
			abstract async get(
				queryString: {
					/** [REQUIRED], integer. Resource ID.  */
					id: number;
				}
			): Promise<GetResults>;

			/** put method */
			abstract async put(): Promise<PutResults>;

			/** post method */
			abstract async post(): Promise<PostResults>;

			/** patch method */
			abstract async patch(): Promise<PatchResults>;

			/** delete method */
			abstract async delete(): Promise<DeleteResults>;
		}
	}



	/** 
	 * /popularmedia
	 * 
	 */
	export namespace Popularmedia {



		/* Response get status 200 do not describe any schema nor MIME */
		export class GetResult200 extends BaseControllerResponse<any> { status = 200; }
		/* Response get status 503 do not describe any schema nor MIME */
		export class GetResult503 extends BaseControllerResponse<any> { status = 503; }
		export type GetResults = GetResult200 | GetResult503 | void;

		/** 
		* /popularmedia abstract handler. 
		*/
		export abstract class AbstractHandler extends BaseController {
			baseUri = "/popularmedia";
			descriptor = {
				"methods": {
					"get": {
						"body": false,
						"securedBy": [],
						"descriptor": {
							"responses": {
								"200": null,
								"503": {
									"description": "The service is currently unavailable or you exceeded the maximum requests\nper hour allowed to your application.\n",
									"headers": {
										"X-waiting-period": {
											"description": "The number of seconds to wait before you can attempt to make a request again.\n",
											"type": "integer",
											"required": true,
											"minimum": 1,
											"maximum": 3600,
											"example": 34,
											"displayName": "X-waiting-period"
										}
									}
								}
							},
							"queryParameters": {}
						}
					}
				},
				"baseUri": "/popularmedia",
				"uriParameters": []
			};
			uriParameters = {

			};

			/**
			* Get a list of what media is most popular at the moment.
			*/
			abstract async get(): Promise<GetResults>;
		}
	}

}
