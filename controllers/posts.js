// const Post = require('../models/post');
// const User = require('../models/user');
var db = require('../models');
 
exports.getPosts = (req, res, next) => {
    
    db.User.findOne({
    where: {
        email: req.session.user
    },
    include: ['posts'],
    })
    .then((user) => {
        res.render('posts', { "posts": user.get({ plain: true }).posts })
    })
  };

  exports.createPosts = (req, res, next) => {
    db.User.findOne({
    where: {
        email: req.session.user
    },
    })
    .then((user) => {
        db.Post.create({
          title: req.body.title,  
          description: req.body.description,  
          image: req.body.image,
          userId: user.id 
        })
        .then(() => {
            res.redirect('posts')
        })
        .catch((err) => {
            console.log('ERROR!!!', err);
        });  
    })
  };

  exports.getPost = (req, res, next) => {
      console.log("Hello grom get post")
      db.Post.findOne({
          where: {
              id: req.params.postId
          }
      })
      .then((post) => {
        res.render('post', { "post": post })
      })
      
  };

  exports.editPost = (req, res, next) => {
    db.Post.update(
        { title: req.body.title,
         description: req.body.description,
         image: req.body.image },
        { where: { id: req.params.postId } }
      )
        .then((postId) => {
            db.Post.findOne({
                where: {
                    id: postId[0]
                }
            })
            .then((post) => {
                res.render('post', { "post": post })
            })
        })
        .catch(err =>
          handleError(err)
        )
    
};