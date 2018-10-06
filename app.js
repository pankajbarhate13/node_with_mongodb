const express = require('express');
const bodyParser = require('body-parser');

// initialize express app
const app = express();


const product = require('../products_info/routes/product.route')

// Set up mongoose connection for mLab
const mongoose = require('mongoose');
const dev_db_url = 
'mongodb://username:password@ds223763.mlab.com:23763/products_info';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Set up mongoose connection for local
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/products_info");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/products', product);

let port = 3000;

app.listen(port, () =>{
  console.log("Server is connected on port :" + port)
})
