const User = require('../models/user');
var db = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;

  exports.homepage = (req, res, next) => {
    res.render('homepage')
  };

  exports.signInUser = (req, res, next) => {
    db.User.findOne({
      where: {
          email: req.body.email
             }
      })
      .then((user) => {
        if(user && bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user;
          console.log("@!!!!!, session", req.session.user)
          res.redirect('/')
        }
        else {
          res.render('signin', {message: "Invalid credentials!"});
        }
      })
  };

  exports.createUser = (req, res, next) => {
    if(!req.body.user_name || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
     } 
     db.User.findOne({
      where: {
          email: req.body.email
             }
      })
      .then(function (user) {
        if (user) {
          res.render('signup', {
            message: "User Already Exists! Login or choose another user id"});
        } 
        else {
          bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            userName: req.body.user_name,
            email: req.body.email,
            password: hash
            }).then(function(data) {
              if (data) {
              req.session.user = data;
              res.redirect('/');
              }
            })
            .catch((error) => {
              console.log(`Error ${error}`)
            });
          });
        }
      })
  };

  exports.logout = (req, res, next) => {
    req.session.destroy
    res.render('homepage', {message: "You are logged out."})
  };