var express = require('express');
var places = express.Router();
var request = require('request');

var data;

places.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        request({
    method: 'POST',
    url: 'https://maps.googleapis.com/maps/api/place/details/json?',
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    qs: {
        key: 'AIzaSyBM-DeB0UKcwSvnimyEvCQiYdZ99Sd49kw',
        placeid: id
    },
    headers: {
        'cache-control': 'no-cache'
        , 'content-type': 'application/json'
    }
    , json: true
}, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body)
                /* GET home page. */
            res.render('place', {
                data: body

            });
        });
    });









module.exports = places;