/*
	Filename: style.css
	Name: Manu Mathew Eldo
	Student ID: 301101208
	Date: 2021-10-20
*/

var port=process.env.PORT || 8080;
var express = require('express');
var app = express();

var router=require('./routes/index.js');
app.set('view engine', 'ejs');

app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Server is up and running at localhost:'+port);

module.exports=app