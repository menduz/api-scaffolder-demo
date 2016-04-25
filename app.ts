import * as express from 'express';
import * as demoApi from './api';

// initialize our express app
var app = express();

// initialize our classes
const controllers = demoApi.initializeControllers();
demoApi.registerRouter(controllers);

// register our api middleware on express
app.use(demoApi.getMiddleware());

// run!
app.listen(3001, () => console.log('Listening on port 3001'));