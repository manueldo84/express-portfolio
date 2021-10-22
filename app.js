/*
	Filename: style.css
	Name: Manu Mathew Eldo
	Student ID: 301101208
	Date: 2021-10-20
*/

var db=require('./db/db');
var port=process.env.PORT || 8081;
var express = require('express');
var app = express();
var session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
	secret: 'very$ecure@pp69',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
}));


var router=require('./routes/index.js');
app.set('view engine', 'ejs');

app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Server is up and running at localhost:'+port);

module.exports=app