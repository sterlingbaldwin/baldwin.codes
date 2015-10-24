var express = require('express');
var router = express.Router();	


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Baldwin codes' 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
  	title: 'Projects' 
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: 'About' 
  });
});

/* GET robots page. */
router.get('/robots', function(req, res, next) {
  res.render('robots', { 
  	title: 'Robot Projects' 
  });
});

/* GET Blog. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { 
  	title: 'Blog' 
  });
});

module.exports = router;
