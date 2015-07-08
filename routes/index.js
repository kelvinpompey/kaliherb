var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kaliherb' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Kaliherb' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Kaliherb' });
});

module.exports = router;
