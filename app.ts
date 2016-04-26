import * as express from 'express';
import * as demoApi from './api';
import { DemoApiV1 } from './api/base';

// initialize our express app
var app = express();

// initialize our classes
const controllers = demoApi.initializeControllers();
demoApi.registerRouter(controllers);

// register the security handler

DemoApiV1.SecurityMiddlewares.myCustomSec = (req, res, next) => {
    if(req.query['token'] != 'safe'){
        throw new DemoApiV1.HttpError.Unauthorized('invalid token');
    }
    next();
}

// register our api middleware on express
app.use(demoApi.getMiddleware());



// run!
app.listen(3001, () => console.log('Listening on port 3001'));