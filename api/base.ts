// THIS IS AN AUTOGENERATED FILE, ANY CHANGES WILL BE LOST. DO NO EDIT THIS FILE



/* TODO:
include creation date and edition warnings
include version of generator
format code
handle request & response headers
*/

import * as express from 'express';
var ospreyRouter = require('osprey-router');
var bodyParser = require('body-parser');

declare interface IContext { /* you must declare a global interface for context */ }

/// DemoApi
export namespace DemoApiV1 {
 
  export interface Dictionary<T> { [key: string] : T; }

  var theRouter = ospreyRouter();
  
  const contextSymbol = Symbol('request-context');
  
  export class BaseControllerResponse<T> {
    status: number = 200;
    mime: string;
    constructor(public data?: T){ }
  }

  export function getMiddleware() {
    return theRouter;
  }
  
  export function getContext(expressRequest: express.Request): IContext {
    return (expressRequest[contextSymbol] = (expressRequest[contextSymbol] || {})) as IContext;
  }

  export namespace SecurityMiddlewares {
    export const securitySettings = {};
    
    export function no_authenticate(req: express.Request, res: express.Response, next){
      next();
    }  
    
  }
  
  namespace SecurityMiddlewaresInvokers {
    export const no_authenticate = (req: express.Request, res: express.Response, next) => SecurityMiddlewares.no_authenticate(req, res, next);
  }
  
  
  
  /**
   * @param {Array} list of middleware to combine
   */
  function concatMiddlewares(list) {
    return function (req, res, next) {
      function iter(i) {
        var mid = list[i];
        if (!mid) return next();
        mid(req, res, function (err) {
          if (err) return next(err);
          iter(i+1);
        });
      }
      
      iter(0);
    }
  }
  
  export class BaseController {
    baseUri: string;
    baseUriParameters: any;
    methods: any;
    uriParameters: any;
    
    currentContext: {
      request: express.Request,
      response: express.Response,
      context: IContext
    };

    /** Register this resource in the specified osprey-router. */
    registerRouter(ospreyRouter?) {
      if(!ospreyRouter) ospreyRouter = theRouter;
      for (let verb in this.methods) {
        let method = this.methods[verb];
        ospreyRouter[verb](
          this.baseUri, 
          this.baseUriParameters, 
          this.getRequestHandler(verb, method)
        );
      }
    }
    
    private generateQueryStringParams(params: { name: string; default: any; type: string; required: boolean; }[]){
      var queryString = {};
      for(let i in params){
        let parameter = params[i];
        queryString[i] = parameter.name in this.currentContext.request.query ? this.currentContext.request.query[parameter.name] : parameter.default;
        
        // if it's required
        if (!(parameter.name in this.currentContext.request.query) && parameter.required && !('default' in parameter)){
          throw new Error("Missing query string parameter " + parameter.name);
        }
        
        if (parameter.name in this.currentContext.request.query) {
          if (parameter.type == "number" || parameter.type == "integer") {
            if (typeof queryString[i] != "undefined" && typeof queryString[i] != "number") {
              if (parameter.type == "number")
                queryString[i] = parseFloat(queryString[i]);
              else
                queryString[i] = parseInt(queryString[i]);
                
              if (isNaN(queryString[i])) {
                if (parameter.required){
                  throw new Error("Invalid query string parameter " + parameter.name + ": " + JSON.stringify(this.currentContext.request.query[parameter.name]));
                } else {
                  queryString[i] = parameter.default || null;
                }
              }
            }
          }
          
          if (parameter.type == "boolean") {
            if (typeof queryString[i] != "boolean") {
              if (!queryString[i] || queryString[i] == "0" || queryString[i] == "false" || queryString[i] == "")
                queryString[i] = false;
              else
                queryString[i] = true;
            }
          }
          
          if (parameter.type == "date") {
            if (!(queryString[i] instanceof Date)) {
              queryString[i] = new Date(queryString[i]);
              if (isNaN(queryString[i])) 
                queryString[i] = parameter.default || null;
            }
          }
        }
      }
      return queryString;
    }
    
    private generateHeaderParams(headers: { name: string; default: any }[]){
      var ret = {};
      for(let i in headers){
        let header = headers[i];
        ret[i] = this.currentContext.request.get(header.name) || header.default;
      }
      return ret;
    }

    private getRequestHandler(name: string, method) {
      let middleware = (req, res, next) => {
        this.setUpCurrentContext(req, res);
          
        let args = [];
          
        if (method.body) {
          if (typeof method.body == "function") {
            method.body(req, res, next);
          } else {
            bodyParser.json()(req, res, next);
          }
          
          args.push(this.currentContext.request.body);
        }
        
        if(method.queryString){
          args.push(this.generateQueryStringParams(method.queryString));
        }
        
        if(method.headers){
          args.push(this.generateHeaderParams(method.headers));
        }
        
        try {
          this[name].apply(this, args).then((r : BaseControllerResponse<any>) => {
            if (r && r instanceof BaseControllerResponse) {
              res.status(r.status);
              
              if (r.mime) {
                res.set('Content-Type', r.mime);
              }
              
              if (r.mime == 'application/json') {
                res.json(r.data);
              } else {
                res.send(r.data);
              }
              
              return;
            } else if(!r) {
              next();
              return;
            }
            if(r && r instanceof Error)
              next(r);
            else
              next(new Error('Unknown method result ' + name.toUpperCase() + ' ' + this.baseUri));
          }).catch(next);
          
        } catch (e) {
          next(e);
        }
      };
      
      if(method.securedBy.length){
        return concatMiddlewares(
          method
            .securedBy
              .map(securitySchema => SecurityMiddlewaresInvokers[securitySchema])
            .concat(middleware)
        );
      } else {
        return middleware;
      }
      
      
    }
    
    setUpCurrentContext(req: express.Request, res: express.Response, ctx?: IContext){
      this.currentContext = {
        request: req,
        response: res,
        context: getContext(req)
      };
      
      this.fillUriParameters(this.currentContext.request.params);
    }
    
    fillUriParameters(params: any){
      if (!params) return;
      for(var param in this.baseUriParameters){
        if(param in params){
          this.uriParameters[param] = params[param];
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
    
    export type GetResults = GetResult200;

    /** 
    * /me abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/me";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": null,
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

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
    
    export type GetResults = GetResult200;

    /** 
    * /users/{userId} abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/users/{userId}";
      baseUriParameters = {
  "userId": {
    "displayName": "userId",
    "type": "string",
    "required": true,
    "description": ""
  }
};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "filter": {
        "displayName": "filter",
        "type": "string",
        "description": "",
        "name": "filter"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      userId: void(0) as string
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200 | GetResult202 | GetResult401 | GetResult404 | GetResult500 | GetResult505;

    /** 
    * /status abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/status";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "desiredStatus": {
        "displayName": "desiredStatus",
        "type": "integer",
        "required": true,
        "description": "",
        "name": "desiredStatus"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /required/boolean abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/required/boolean";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "boolean",
        "required": true,
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /required/date abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/required/date";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "date",
        "required": true,
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /required/integer abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/required/integer";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "integer",
        "required": true,
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /required/number abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/required/number";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "number",
        "required": true,
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /non-required/boolean abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/non-required/boolean";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "boolean",
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /non-required/date abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/non-required/date";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "date",
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /non-required/integer abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/non-required/integer";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "integer",
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
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
    
    export type GetResults = GetResult200;

    /** 
    * /non-required/number abstract handler. 
    */
    export abstract class AbstractHandler extends BaseController {
      baseUri = "/non-required/number";
      baseUriParameters = {};
      methods = {
  "get": {
    "body": false,
    "queryString": {
      "param": {
        "displayName": "param",
        "type": "number",
        "description": "",
        "name": "param"
      }
    },
    "headers": null,
    "securedBy": []
  }
};
      uriParameters = {
      
    }

      /** get method */
      abstract async get(
    queryString: {
      param?: number;
    }
  ): Promise<GetResults>;
    }
  }
  
}