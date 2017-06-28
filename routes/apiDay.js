var Promise = require('bluebird');
var express = require('express');
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var dayRouter = express.Router();
var Day = require('../models/day');

//you'll need routes to get a list of all the days, get one specific day, delete one specific day, and create a new day.

dayRouter.get('/', function(req, res, next) {
  Day.findAll()
  .then(function(dayArr){
    res.json(dayArr);
  });
});

dayRouter.get('/:id', function(req, res, next) {
  var numId = +req.params.id;
  Day.findById(numId)
  .then(function(day){
    res.json(day);
  })
  .catch(next);
});

dayRouter.delete('/:id', function(req, res, next) {
  var numId = +req.params.id;
  Day.destroy({
    where: {id: numId}
  })
  .then(function(){
    res.json('destroyed!');
  });
});

dayRouter.put('/', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  });
});

dayRouter.put('/:id/restaurants', function(req, res, next) {
  var numId = +req.params.id;
  Day.findAll({
  include: [{
    model: Restaurant
  }]
});

  .findById(numId)
  .then(function(day){
    res.json(day);
  })
});

dayRouter.put('/:id/hotels', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  })
});

dayRouter.put('/:id/activities', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  })
});

dayRouter.delete('/:id/hotels', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  })
});

dayRouter.delete('/:id/hotels', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  })
});

dayRouter.delete('/:id/hotels', function(req, res, next) {
  var num = +req.body.number;
  Day.create({
    number: num
  })
  .then(function(day){
    res.json(day);
  })
});

module.exports = dayRouter;
