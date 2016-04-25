// THIS IS AN AUTOGENERATED FILE, ANY CHANGES WILL BE LOST. DO NO EDIT THIS FILE
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var ospreyRouter = require('osprey-router');
var bodyParser = require('body-parser');
/// DemoApi
var DemoApiV1;
(function (DemoApiV1) {
    var theRouter = ospreyRouter();
    const contextSymbol = Symbol('request-context');
    class BaseControllerResponse {
        constructor(data) {
            this.data = data;
            this.status = 200;
        }
    }
    DemoApiV1.BaseControllerResponse = BaseControllerResponse;
    function getMiddleware() {
        return theRouter;
    }
    DemoApiV1.getMiddleware = getMiddleware;
    function getContext(expressRequest) {
        return (expressRequest[contextSymbol] = (expressRequest[contextSymbol] || {}));
    }
    DemoApiV1.getContext = getContext;
    var SecurityMiddlewares;
    (function (SecurityMiddlewares) {
        SecurityMiddlewares.securitySettings = {};
        function no_authenticate(req, res, next) {
            next();
        }
        SecurityMiddlewares.no_authenticate = no_authenticate;
    })(SecurityMiddlewares = DemoApiV1.SecurityMiddlewares || (DemoApiV1.SecurityMiddlewares = {}));
    var SecurityMiddlewaresInvokers;
    (function (SecurityMiddlewaresInvokers) {
        SecurityMiddlewaresInvokers.no_authenticate = (req, res, next) => SecurityMiddlewares.no_authenticate(req, res, next);
    })(SecurityMiddlewaresInvokers || (SecurityMiddlewaresInvokers = {}));
    /**
     * @param {Array} list of middleware to combine
     */
    function concatMiddlewares(list) {
        return function (req, res, next) {
            function iter(i) {
                var mid = list[i];
                if (!mid)
                    return next();
                mid(req, res, function (err) {
                    if (err)
                        return next(err);
                    iter(i + 1);
                });
            }
            iter(0);
        };
    }
    class BaseController {
        /** Register this resource in the specified osprey-router. */
        registerRouter(ospreyRouter) {
            if (!ospreyRouter)
                ospreyRouter = theRouter;
            for (let verb in this.methods) {
                let method = this.methods[verb];
                ospreyRouter[verb](this.baseUri, this.baseUriParameters, this.getRequestHandler(verb, method));
            }
        }
        generateQueryStringParams(params) {
            var queryString = {};
            for (let i in params) {
                let parameter = params[i];
                queryString[i] = parameter.name in this.currentContext.request.query ? this.currentContext.request.query[parameter.name] : parameter.default;
            }
            return queryString;
        }
        generateHeaderParams(headers) {
            var ret = {};
            for (let i in headers) {
                let header = headers[i];
                ret[i] = this.currentContext.request.get(header.name) || header.default;
            }
            return ret;
        }
        getRequestHandler(name, method) {
            let middleware = (req, res, next) => {
                this.setUpCurrentContext(req, res);
                let args = [];
                if (method.body) {
                    if (typeof method.body == "function") {
                        method.body(req, res, next);
                    }
                    else {
                        bodyParser.json()(req, res, next);
                    }
                    args.push(this.currentContext.request.body);
                }
                if (method.queryString) {
                    args.push(this.generateQueryStringParams(method.queryString));
                }
                if (method.headers) {
                    args.push(this.generateHeaderParams(method.headers));
                }
                try {
                    this[name].apply(this, args).then((r) => {
                        if (r && r instanceof BaseControllerResponse) {
                            res.status(r.status);
                            if (r.mime) {
                                res.set('Content-Type', r.mime);
                            }
                            if (r.mime == 'application/json') {
                                res.json(r.data);
                            }
                            else {
                                res.send(r.data);
                            }
                            return;
                        }
                        else if (!r) {
                            next();
                            return;
                        }
                        if (r && r instanceof Error)
                            next(r);
                        else
                            next(new Error('Unknown method result ' + name.toUpperCase() + ' ' + this.baseUri));
                    }).catch(next);
                }
                catch (e) {
                    next(e);
                }
            };
            if (method.securedBy.length) {
                return concatMiddlewares(method
                    .securedBy
                    .map(securitySchema => SecurityMiddlewaresInvokers[securitySchema])
                    .concat(middleware));
            }
            else {
                return middleware;
            }
        }
        setUpCurrentContext(req, res, ctx) {
            this.currentContext = {
                request: req,
                response: res,
                context: getContext(req)
            };
            this.fillUriParameters(this.currentContext.request.params);
        }
        fillUriParameters(params) {
            if (!params)
                return;
            for (var param in this.baseUriParameters) {
                if (param in params) {
                    this.uriParameters[param] = params[param];
                }
            }
        }
    }
    DemoApiV1.BaseController = BaseController;
    /**
     * /me
     *
     */
    var Me;
    (function (Me) {
        /* Response get status 200 do not describe any schema nor MIME */
        class GetResult200 extends BaseControllerResponse {
            constructor(...args) {
                super(...args);
                this.status = 200;
            }
        }
        Me.GetResult200 = GetResult200;
        /**
        * /me abstract handler.
        */
        class AbstractHandler extends BaseController {
            constructor(...args) {
                super(...args);
                this.baseUri = "/me";
                this.baseUriParameters = {};
                this.methods = {
                    "get": {
                        "body": false,
                        "queryString": null,
                        "headers": null,
                        "securedBy": []
                    }
                };
                this.uriParameters = {};
            }
        }
        Me.AbstractHandler = AbstractHandler;
    })(Me = DemoApiV1.Me || (DemoApiV1.Me = {}));
})(DemoApiV1 = exports.DemoApiV1 || (exports.DemoApiV1 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOzs7Ozs7Ozs7O0FBWWhGLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFJeEMsV0FBVztBQUNYLElBQWlCLFNBQVMsQ0FvT3pCO0FBcE9ELFdBQWlCLFNBQVMsRUFBQyxDQUFDO0lBSTFCLElBQUksU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBRS9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRWhEO1FBR0UsWUFBbUIsSUFBUTtZQUFSLFNBQUksR0FBSixJQUFJLENBQUk7WUFGM0IsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUVTLENBQUM7SUFDakMsQ0FBQztJQUpZLGdDQUFzQix5QkFJbEMsQ0FBQTtJQUVEO1FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRmUsdUJBQWEsZ0JBRTVCLENBQUE7SUFFRCxvQkFBMkIsY0FBK0I7UUFDeEQsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFhLENBQUM7SUFDN0YsQ0FBQztJQUZlLG9CQUFVLGFBRXpCLENBQUE7SUFFRCxJQUFpQixtQkFBbUIsQ0FPbkM7SUFQRCxXQUFpQixtQkFBbUIsRUFBQyxDQUFDO1FBQ3ZCLG9DQUFnQixHQUFHLEVBQUUsQ0FBQztRQUVuQyx5QkFBZ0MsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQUk7WUFDL0UsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO1FBRmUsbUNBQWUsa0JBRTlCLENBQUE7SUFFSCxDQUFDLEVBUGdCLG1CQUFtQixHQUFuQiw2QkFBbUIsS0FBbkIsNkJBQW1C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QUUsRUFBQyxDQUFDO1FBSW5CLGlFQUFpRTtRQUNqRSwyQkFBa0Msc0JBQXNCO1lBQXhEO2dCQUFrQyxlQUEyQjtnQkFBRyxXQUFNLEdBQUcsR0FBRyxDQUFDO1lBQUMsQ0FBQztRQUFELENBQUM7UUFBbEUsZUFBWSxlQUFzRCxDQUFBO1FBSS9FOztVQUVFO1FBQ0YsOEJBQThDLGNBQWM7WUFBNUQ7Z0JBQThDLGVBQWM7Z0JBQzFELFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDdkIsWUFBTyxHQUFHO29CQUNkLEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUUsS0FBSzt3QkFDYixhQUFhLEVBQUUsSUFBSTt3QkFDbkIsU0FBUyxFQUFFLElBQUk7d0JBQ2YsV0FBVyxFQUFFLEVBQUU7cUJBQ2hCO2lCQUNGLENBQUM7Z0JBQ0ksa0JBQWEsR0FBRyxFQUVqQixDQUFBO1lBSUQsQ0FBQztRQUFELENBQUM7UUFqQnFCLGtCQUFlLGtCQWlCcEMsQ0FBQTtJQUNILENBQUMsRUE5QmdCLEVBQUUsR0FBRixZQUFFLEtBQUYsWUFBRSxRQThCbEI7QUFFSCxDQUFDLEVBcE9nQixTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQW9PekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUSElTIElTIEFOIEFVVE9HRU5FUkFURUQgRklMRSwgQU5ZIENIQU5HRVMgV0lMTCBCRSBMT1NULiBETyBOTyBFRElUIFRISVMgRklMRVxuXG5cblxuLyogVE9ETzpcbmluY2x1ZGUgY3JlYXRpb24gZGF0ZSBhbmQgZWRpdGlvbiB3YXJuaW5nc1xuaW5jbHVkZSB2ZXJzaW9uIG9mIGdlbmVyYXRvclxuZm9ybWF0IGNvZGVcbmhhbmRsZSByZXF1ZXN0ICYgcmVzcG9uc2UgaGVhZGVyc1xuKi9cblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbnZhciBvc3ByZXlSb3V0ZXIgPSByZXF1aXJlKCdvc3ByZXktcm91dGVyJyk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5cbmRlY2xhcmUgaW50ZXJmYWNlIElDb250ZXh0IHsgLyogeW91IG11c3QgZGVjbGFyZSBhIGdsb2JhbCBpbnRlcmZhY2UgZm9yIGNvbnRleHQgKi8gfVxuXG4vLy8gRGVtb0FwaVxuZXhwb3J0IG5hbWVzcGFjZSBEZW1vQXBpVjEge1xuIFxuICBleHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4geyBba2V5OiBzdHJpbmddIDogVDsgfVxuXG4gIHZhciB0aGVSb3V0ZXIgPSBvc3ByZXlSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IGNvbnRleHRTeW1ib2wgPSBTeW1ib2woJ3JlcXVlc3QtY29udGV4dCcpO1xuICBcbiAgZXhwb3J0IGNsYXNzIEJhc2VDb250cm9sbGVyUmVzcG9uc2U8VD4ge1xuICAgIHN0YXR1czogbnVtYmVyID0gMjAwO1xuICAgIG1pbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YT86IFQpeyB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxld2FyZSgpIHtcbiAgICByZXR1cm4gdGhlUm91dGVyO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChleHByZXNzUmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0KTogSUNvbnRleHQge1xuICAgIHJldHVybiAoZXhwcmVzc1JlcXVlc3RbY29udGV4dFN5bWJvbF0gPSAoZXhwcmVzc1JlcXVlc3RbY29udGV4dFN5bWJvbF0gfHwge30pKSBhcyBJQ29udGV4dDtcbiAgfVxuXG4gIGV4cG9ydCBuYW1lc3BhY2UgU2VjdXJpdHlNaWRkbGV3YXJlcyB7XG4gICAgZXhwb3J0IGNvbnN0IHNlY3VyaXR5U2V0dGluZ3MgPSB7fTtcbiAgICBcbiAgICBleHBvcnQgZnVuY3Rpb24gbm9fYXV0aGVudGljYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQpe1xuICAgICAgbmV4dCgpO1xuICAgIH0gIFxuICAgIFxuICB9XG4gIFxuICBuYW1lc3BhY2UgU2VjdXJpdHlNaWRkbGV3YXJlc0ludm9rZXJzIHtcbiAgICBleHBvcnQgY29uc3Qgbm9fYXV0aGVudGljYXRlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQpID0+IFNlY3VyaXR5TWlkZGxld2FyZXMubm9fYXV0aGVudGljYXRlKHJlcSwgcmVzLCBuZXh0KTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheX0gbGlzdCBvZiBtaWRkbGV3YXJlIHRvIGNvbWJpbmVcbiAgICovXG4gIGZ1bmN0aW9uIGNvbmNhdE1pZGRsZXdhcmVzKGxpc3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBmdW5jdGlvbiBpdGVyKGkpIHtcbiAgICAgICAgdmFyIG1pZCA9IGxpc3RbaV07XG4gICAgICAgIGlmICghbWlkKSByZXR1cm4gbmV4dCgpO1xuICAgICAgICBtaWQocmVxLCByZXMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgIGl0ZXIoaSsxKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGl0ZXIoMCk7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAgIGJhc2VVcmk6IHN0cmluZztcbiAgICBiYXNlVXJpUGFyYW1ldGVyczogYW55O1xuICAgIG1ldGhvZHM6IGFueTtcbiAgICB1cmlQYXJhbWV0ZXJzOiBhbnk7XG4gICAgXG4gICAgY3VycmVudENvbnRleHQ6IHtcbiAgICAgIHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlLFxuICAgICAgY29udGV4dDogSUNvbnRleHRcbiAgICB9O1xuXG4gICAgLyoqIFJlZ2lzdGVyIHRoaXMgcmVzb3VyY2UgaW4gdGhlIHNwZWNpZmllZCBvc3ByZXktcm91dGVyLiAqL1xuICAgIHJlZ2lzdGVyUm91dGVyKG9zcHJleVJvdXRlcj8pIHtcbiAgICAgIGlmKCFvc3ByZXlSb3V0ZXIpIG9zcHJleVJvdXRlciA9IHRoZVJvdXRlcjtcbiAgICAgIGZvciAobGV0IHZlcmIgaW4gdGhpcy5tZXRob2RzKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLm1ldGhvZHNbdmVyYl07XG4gICAgICAgIG9zcHJleVJvdXRlclt2ZXJiXShcbiAgICAgICAgICB0aGlzLmJhc2VVcmksIFxuICAgICAgICAgIHRoaXMuYmFzZVVyaVBhcmFtZXRlcnMsIFxuICAgICAgICAgIHRoaXMuZ2V0UmVxdWVzdEhhbmRsZXIodmVyYiwgbWV0aG9kKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdlbmVyYXRlUXVlcnlTdHJpbmdQYXJhbXMocGFyYW1zOiB7IG5hbWU6IHN0cmluZzsgZGVmYXVsdDogYW55IH1bXSl7XG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSB7fTtcbiAgICAgIGZvcihsZXQgaSBpbiBwYXJhbXMpe1xuICAgICAgICBsZXQgcGFyYW1ldGVyID0gcGFyYW1zW2ldO1xuICAgICAgICBxdWVyeVN0cmluZ1tpXSA9IHBhcmFtZXRlci5uYW1lIGluIHRoaXMuY3VycmVudENvbnRleHQucmVxdWVzdC5xdWVyeSA/IHRoaXMuY3VycmVudENvbnRleHQucmVxdWVzdC5xdWVyeVtwYXJhbWV0ZXIubmFtZV0gOiBwYXJhbWV0ZXIuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUhlYWRlclBhcmFtcyhoZWFkZXJzOiB7IG5hbWU6IHN0cmluZzsgZGVmYXVsdDogYW55IH1bXSl7XG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBmb3IobGV0IGkgaW4gaGVhZGVycyl7XG4gICAgICAgIGxldCBoZWFkZXIgPSBoZWFkZXJzW2ldO1xuICAgICAgICByZXRbaV0gPSB0aGlzLmN1cnJlbnRDb250ZXh0LnJlcXVlc3QuZ2V0KGhlYWRlci5uYW1lKSB8fCBoZWFkZXIuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0SGFuZGxlcihuYW1lOiBzdHJpbmcsIG1ldGhvZCkge1xuICAgICAgbGV0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRVcEN1cnJlbnRDb250ZXh0KHJlcSwgcmVzKTtcbiAgICAgICAgICBcbiAgICAgICAgbGV0IGFyZ3MgPSBbXTtcbiAgICAgICAgICBcbiAgICAgICAgaWYgKG1ldGhvZC5ib2R5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QuYm9keSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1ldGhvZC5ib2R5KHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keVBhcnNlci5qc29uKCkocmVxLCByZXMsIG5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBhcmdzLnB1c2godGhpcy5jdXJyZW50Q29udGV4dC5yZXF1ZXN0LmJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihtZXRob2QucXVlcnlTdHJpbmcpe1xuICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmdlbmVyYXRlUXVlcnlTdHJpbmdQYXJhbXMobWV0aG9kLnF1ZXJ5U3RyaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG1ldGhvZC5oZWFkZXJzKXtcbiAgICAgICAgICBhcmdzLnB1c2godGhpcy5nZW5lcmF0ZUhlYWRlclBhcmFtcyhtZXRob2QuaGVhZGVycykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXNbbmFtZV0uYXBwbHkodGhpcywgYXJncykudGhlbigociA6IEJhc2VDb250cm9sbGVyUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICAgICAgaWYgKHIgJiYgciBpbnN0YW5jZW9mIEJhc2VDb250cm9sbGVyUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cyhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoci5taW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgci5taW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHIubWltZSA9PSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgICAgICAgICAgICByZXMuanNvbihyLmRhdGEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHIuZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZighcikge1xuICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHIgJiYgciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAgICBuZXh0KHIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBuZXh0KG5ldyBFcnJvcignVW5rbm93biBtZXRob2QgcmVzdWx0ICcgKyBuYW1lLnRvVXBwZXJDYXNlKCkgKyAnICcgKyB0aGlzLmJhc2VVcmkpKTtcbiAgICAgICAgICB9KS5jYXRjaChuZXh0KTtcbiAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5leHQoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIGlmKG1ldGhvZC5zZWN1cmVkQnkubGVuZ3RoKXtcbiAgICAgICAgcmV0dXJuIGNvbmNhdE1pZGRsZXdhcmVzKFxuICAgICAgICAgIG1ldGhvZFxuICAgICAgICAgICAgLnNlY3VyZWRCeVxuICAgICAgICAgICAgICAubWFwKHNlY3VyaXR5U2NoZW1hID0+IFNlY3VyaXR5TWlkZGxld2FyZXNJbnZva2Vyc1tzZWN1cml0eVNjaGVtYV0pXG4gICAgICAgICAgICAuY29uY2F0KG1pZGRsZXdhcmUpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgfVxuICAgIFxuICAgIHNldFVwQ3VycmVudENvbnRleHQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgY3R4PzogSUNvbnRleHQpe1xuICAgICAgdGhpcy5jdXJyZW50Q29udGV4dCA9IHtcbiAgICAgICAgcmVxdWVzdDogcmVxLFxuICAgICAgICByZXNwb25zZTogcmVzLFxuICAgICAgICBjb250ZXh0OiBnZXRDb250ZXh0KHJlcSlcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMuZmlsbFVyaVBhcmFtZXRlcnModGhpcy5jdXJyZW50Q29udGV4dC5yZXF1ZXN0LnBhcmFtcyk7XG4gICAgfVxuICAgIFxuICAgIGZpbGxVcmlQYXJhbWV0ZXJzKHBhcmFtczogYW55KXtcbiAgICAgIGlmICghcGFyYW1zKSByZXR1cm47XG4gICAgICBmb3IodmFyIHBhcmFtIGluIHRoaXMuYmFzZVVyaVBhcmFtZXRlcnMpe1xuICAgICAgICBpZihwYXJhbSBpbiBwYXJhbXMpe1xuICAgICAgICAgIHRoaXMudXJpUGFyYW1ldGVyc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuXG5cbiAgXG4gIFxuXG4gIC8qKiBcbiAgICogL21lXG4gICAqIFxuICAgKi9cbiAgZXhwb3J0IG5hbWVzcGFjZSBNZSB7XG4gICAgXG5cblxuICAgIC8qIFJlc3BvbnNlIGdldCBzdGF0dXMgMjAwIGRvIG5vdCBkZXNjcmliZSBhbnkgc2NoZW1hIG5vciBNSU1FICovXG4gICAgZXhwb3J0IGNsYXNzIEdldFJlc3VsdDIwMCBleHRlbmRzIEJhc2VDb250cm9sbGVyUmVzcG9uc2U8YW55PiB7IHN0YXR1cyA9IDIwMDsgfVxuICAgIFxuICAgIGV4cG9ydCB0eXBlIEdldFJlc3VsdHMgPSBHZXRSZXN1bHQyMDA7XG5cbiAgICAvKiogXG4gICAgKiAvbWUgYWJzdHJhY3QgaGFuZGxlci4gXG4gICAgKi9cbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RIYW5kbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICAgICAgYmFzZVVyaSA9IFwiL21lXCI7XG4gICAgICBiYXNlVXJpUGFyYW1ldGVycyA9IHt9O1xuICAgICAgbWV0aG9kcyA9IHtcbiAgXCJnZXRcIjoge1xuICAgIFwiYm9keVwiOiBmYWxzZSxcbiAgICBcInF1ZXJ5U3RyaW5nXCI6IG51bGwsXG4gICAgXCJoZWFkZXJzXCI6IG51bGwsXG4gICAgXCJzZWN1cmVkQnlcIjogW11cbiAgfVxufTtcbiAgICAgIHVyaVBhcmFtZXRlcnMgPSB7XG4gICAgICBcbiAgICB9XG5cbiAgICAgIC8qKiBnZXQgbWV0aG9kICovXG4gICAgICBhYnN0cmFjdCBhc3luYyBnZXQoKTogUHJvbWlzZTxHZXRSZXN1bHRzPjtcbiAgICB9XG4gIH1cbiAgXG59Il19