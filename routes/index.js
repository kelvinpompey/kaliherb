var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('kalidb', ['products']);

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

router.get('/products', function(req, res, next){
	db.products.find(function(err, docs){
		res.send(docs); 
	}); 
}); 

module.exports = router;
