/* eslint-env node */

// This application uses express as its web server
// for more info, see: http://expressjs.com
import express from 'express';

import cfenv from 'cfenv';
import routes from './application/routes.js'

// create a new express server
const app = express();

routes.assignRoutes(app);

// get the app environment from Cloud Foundry
const appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url);
});
