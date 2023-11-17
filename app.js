'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const userLogin = require('./routes/auth');
const userSignUp = require('./routes/auth');

const subscriptionRoute = require('./routes/subscription');
const getSubscriptionByIdRoute = require('./routes/subscription');
const getPaymentSuccessRoute = require('./routes/subscription');

const upload = require('./routes/uploadimage')
const getImagesByCategory = require('./routes/uploadimage')
const getImagesByTag = require('./routes/uploadimage')
const downloadImage = require('./routes/uploadimage')
// Import routes for authentication

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// Routes
app.use('/api/auth/', userLogin);
app.use('/api/auth/', userSignUp);

//subscribe
app.use('/api/subscribe/', subscriptionRoute);
app.use('/api/subscribe/', getSubscriptionByIdRoute);
app.use('/api/subscribe/', getPaymentSuccessRoute);

//uploadImage
app.use('/api/', upload);
app.use('/api/', getImagesByCategory)
app.use('/api/', getImagesByTag)
app.use('/api/', downloadImage)
module.exports = app;
