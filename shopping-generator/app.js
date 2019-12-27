var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');


var categoriesRouter = require('./routes/categories');
var productRouter = require('./routes/products.js');
//var usersRouter = require('./routes/users');


var app = express();
app.use(express.static('/'))
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/category', categoriesRouter);
app.use('/products', productRouter);

module.exports = app;