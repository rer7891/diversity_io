var express = require('express');
var router = express.Router();
const postController = require('../controllers/posts');
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};

router.get('/posts', authenticateJWT, postController.getPosts)
router.post('/posts', postController.createPosts)
router.post('/post/:postId', postController.editPost)
router.get('/post/:postId', postController.getPost)

module.exports = router