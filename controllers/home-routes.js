const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// signup
router.get('/signup', (req, res) => {
  res.render('signup');
});

// login 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;