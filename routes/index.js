var express = require('express');
var router = express.Router();
var request = require('request');

var data;
var request = require("request");

var options = {
    method: 'POST'
    , url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    , qs: 
   { location: '44.019076299999995, -123.10060789999999',
    // radius: '10000',
     type: 'restaurant',
     opennow: 'true',
     rankby: 'distance',
     key: 'AIzaSyBM-DeB0UKcwSvnimyEvCQiYdZ99Sd49kw' }
    , headers: {
        'cache-control': 'no-cache'
        , 'content-type': 'application/json'
    }
    , json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index', {data : body.results});
    });
});



module.exports = router;