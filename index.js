'use strict'

// Import any 3rd party libraries used
const express = require('express');

const app = express();

// If in development environment, read enviroment variables from local .env file
if (app.get('env') == 'development') {
  require('dotenv').config();
}

// Set app port
app.set('port', (process.env.PORT || 3600));

// Home route
app.get('/', (req, res) => {
  res.status(200).send('Server');
});

// Listen on port
app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});