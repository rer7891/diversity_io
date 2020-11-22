var express = require('express');
var router = express.Router();
const userController = require('../controllers/users')

// Home page route.
router.get('/', userController.homepage)


router.get('/signup', function(req, res){
    res.render('../views/signup.jade');
 });
 
 router.post('/signup', userController.createUser
//  function(req, res){
//    console.log("hello body!!!", req)
//     if(!req.body.first_name || !req.body.password){
//        res.status("400");
//        res.send("Invalid details!");
//     } else {
//       //  Users.filter(function(user){
//       //     if(user.id === req.body.id){
//       //        res.render('../views/signup.jade', {
//       //           message: "User Already Exists! Login or choose another user id"});
//       //     }
//       //  });
//        var newUser = userController.createUser
//        req.session.user = newUser;
//        console.log("hello body!!!!!!", req.body)
//        console.log("hello session!!!!!!", req.session)
//        res.redirect('/');
//     }
//  }
 );

// router.get('/register', );

module.exports = router;