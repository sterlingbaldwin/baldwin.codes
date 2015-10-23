var express = require('express');
var router = express.Router();	


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Baldwin codes' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Sterling\'s Projects' });
});

/* GET wladder page. */
router.get('/wladder', function(req, res, next) {
  res.render('wladder', { title: 'Sterling\'s Word Ladder' });
});

module.exports = router;
