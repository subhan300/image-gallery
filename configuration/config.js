
var config = module.exports = {};
const dotenv = require('dotenv');
dotenv.config();
//mongo database
config.mongo = {};
config.mongo.uri = process.env.CONNECTION_STRING || 'localhost';
config.mongo.db = 'image-gallery';
//middlewares 
config.jwt = {};
config.jwt.isauthenticated = false

