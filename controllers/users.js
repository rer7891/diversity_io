const User = require('../models/user');
var db = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;
exports.postCreateUser = (req, res, next) => {
    const user = new User(req.body.first_name, req.body.last_name, req.body.password, req.body.user_name, req.body.email);
    user.save();
    res.redirect('/');
  };

  exports.homepage = (req, res, next) => {
    res.send("Hello world")
  };


 exports.createUser = (req, res, next) => {
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
  };