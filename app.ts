import * as express from 'express';
import * as demoApi from './api';
import { DemoApi_V1, HttpError } from './api/base';

// initialize our express app
var app = express();

// initialize our classes
const controllers = demoApi.initializeControllers();
demoApi.registerRouter(controllers);

// register the security handler

DemoApi_V1.SecurityMiddlewares.myCustomSec = (req, res, next) => {
    if(req.query['token'] != 'safe'){
        throw new HttpError.Unauthorized('invalid token');
    }
    next();
}

DemoApi_V1.httpErrorHandler = (error, req, res, next) => {
    res.status(error.status).send(`<h1>${error.message || error.constructor.name}</h1>`);
}

// register our api middleware on express
app.use(demoApi.getMiddleware());

app.use(function(error, req, res, next) {
    res.status(error.code || 400).send(`<h1>${error.message || error.constructor.name}</h1><hr/><pre>` + JSON.stringify(error, null, 4) + '</pre>');
} as any);

// run!
app.listen(3001, () => console.log('Listening on port 3001'));