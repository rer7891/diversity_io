var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');
const user = require('../models/user');

// Home page route.
router.get('/', userController.homepage)


router.get('/signup', function(req, res){
    res.render('../views/signup.jade');
 });
 
 router.get('/signin', function(req, res){
    res.render('../views/signin.jade');
 });

 router.get('/logout', userController.logout)

 router.post('/signup', userController.createUser)
 router.post('/signin', userController.signInUser)


module.exports = router;