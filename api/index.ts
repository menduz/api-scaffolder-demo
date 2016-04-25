// THIS IS AN AUTOGENERATED FILE, ANY CHANGES WILL BE LOST. DO NO EDIT THIS FILE
import * as express from 'express';

import { DemoApiV1 } from './base';

const controllers = [];


// /me
controllers.push(require('./impl/me'));

// /users/{userId}
controllers.push(require('./impl/userById'));

// /status
controllers.push(require('./impl/status'));

// /required/boolean
controllers.push(require('./impl/required/boolean'));

// /required/date
controllers.push(require('./impl/required/date'));

// /required/integer
controllers.push(require('./impl/required/integer'));

// /required/number
controllers.push(require('./impl/required/number'));

// /non-required/boolean
controllers.push(require('./impl/non/required/boolean'));

// /non-required/date
controllers.push(require('./impl/non/required/date'));

// /non-required/integer
controllers.push(require('./impl/non/required/integer'));

// /non-required/number
controllers.push(require('./impl/non/required/number'));

// /crud
controllers.push(require('./impl/crud'));

// /popularmedia
controllers.push(require('./impl/popularmedia'));



/** generates a new instance of each controller of the api. */
export function initializeControllers(): DemoApiV1.BaseController[] {
  let instances = [];
  
  controllers.forEach(x => {
    instances.push(new x.Controller());
  });
  
  return instances;
}

/** registers the controllers on a router */
export function registerRouter(controllers?: DemoApiV1.BaseController[], router?){
    if(!controllers) controllers = initializeControllers();
    if(!router) router = getMiddleware();
    controllers.forEach(x => x.registerRouter(router));
    return controllers;
}

/** gets the router */
export function getMiddleware(){
    return DemoApiV1.getMiddleware();
}

/** gets the context reference of the given request */
export function getContext(expressRequest: express.Request): IContext {
    return DemoApiV1.getContext(expressRequest);
}