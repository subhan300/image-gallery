'use strict';
const mongoose = require('mongoose');
const app = require('./app');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const Config = require('./configuration/config');

// const DB = 'mongodb://localhost:27017/image-gallery';
const DB = 'mongodb+srv://hasnainaskari32:1234567890@cluster0.30yjqvp.mongodb.net/?retryWrites=true&w=majority';
const port = process.env.PORT || 8000;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection successfully!');
    app.use(bodyParser.json());
    app.use(cors());
    app.options('*', cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    http.createServer(app).listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });