
var express = require('express');
var router = express.Router();	

router.get('/wladder', function(req, res, next){
  res.render('wladder', {title: 'Wladder'});
});

module.exports = router;
