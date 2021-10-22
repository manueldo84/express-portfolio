/*
    Filename: style.css
	Name: Manu Mathew Eldo
	Student ID: 301101208
	Date: 2021-10-20
*/

var express = require('express');
var router = express.Router();
var Users = require('../models/User');
var Contacts = require('../models/Contact');

const restrictAuth=(req,res,next)=>{
    if(req.session.isLoggedIn) {
        next();
    }
    else {
        res.redirect('/login');
    }
};

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

router.get('/login', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Projects"
    };
    res.render('pages/login',{global_data:global_data, submitRes:""});
});

router.post('/login', async function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Projects"
    };

    console.log(req.body);
    let submitRes="";
    var user=await Users.findOne({"username":req.body.username, password:req.body.password});
    if(!user) {
        submitRes="Invalid Credentials";
        res.render('pages/login',{global_data:global_data, submitRes:submitRes});
    }
    else 
    {
        req.session.isLoggedIn=true;
        res.redirect("/view-contacts");
    }
});

router.get('/contact', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Contact"
    };
    res.render('pages/contact',{global_data:global_data});
});


router.get('/aboutme', function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - About Me"
    };
    res.render('pages/aboutme',{global_data:global_data});
});

router.get('/view-contacts', restrictAuth, async function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Contact List"
    };

    var contacts=await Contacts.find();
    res.render('pages/contactlist',{global_data:global_data, contacts:contacts});
});

router.get('/add-contact', restrictAuth, function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Add Contact"
    };
    res.render('pages/contactlist-add',{global_data:global_data});
});

router.post('/add-contact', restrictAuth, async function(req, res) {
    var global_data={
        "page_title":"Manu Mathew Eldo - Add Contact"
    };
    
    await(new Contacts({name:req.body.name, email:req.body.email, phone: req.body.phone}).save());
    res.redirect('/view-contacts');
});

module.exports = router;