
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WayPathIO' });
});
module.exports = router;



