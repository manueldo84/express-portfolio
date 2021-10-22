/*
    Filename: style.css
	Name: Manu Mathew Eldo
	Student ID: 301101208
	Date: 2021-10-20
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Web Developer"
    };
    res.render('pages/index',{global_data:global_data});
});

router.get('/services', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Services"
    };
    res.render('pages/services',{global_data:global_data});
});

router.get('/projects', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Projects"
    };
    res.render('pages/projects',{global_data:global_data});
});

router.get('/aboutme', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - About Me"
    };
    res.render('pages/aboutme',{global_data:global_data});
});

router.get('/contact', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Contact"
    };
    res.render('pages/contact',{global_data:global_data});
});

module.exports = router;