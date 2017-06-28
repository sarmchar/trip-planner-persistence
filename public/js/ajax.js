'use strict';

//Append it to the DOM as option elements for the correct select elements
var restaurantPromise = $.get('/api/restaurants');
// .then(function (restaurantsArr) {
//   // restaurants = restaurantsArr;
//   console.log('RESTAURANTS', restaurants);
//   restaurantsArr.forEach(function(restaurant){
//     //makeOption(restaurant);
//   });
//   // return restaurantsArr;
// })
// .catch( console.error.bind(console) );

// console.log('REsaturants 2!', restaurants);

var hotelPromise = $.get('/api/hotels');
// .then(function (hotelsArr) {

//   console.log('HOTELS');
//   hotelsArr.forEach(function(hotel){
//     console.log(hotel.name);
//   });

// })
// .catch( console.error.bind(console) );

var activityPromise = $.get('/api/activities');
// .then(function (activitiesArr) {
//   // activities = activitiesArr;
//   // activitiesArr.forEach(function(activity){
//   //   console.log(activity.name);
//   // });
// })
// .catch( console.error.bind(console) );



// var activities;

// //Append it to the DOM as option elements for the correct select elements
// var restaurants = $.get('/api/restaurants')
// .then(function (restaurantsArr) {
//   // restaurants = restaurantsArr;
//   // restaurantsArr.forEach(function(restaurant){
//   //   console.log(restaurant.name);
//   // });
//   return restaurantsArr;
// })
// .catch( console.error.bind(console) );

// var hotels = $.get('/api/hotels')
// .then(function (hotelsArr) {
//   // hotels = hotelsArr;
//   // hotelsArr.forEach(function(hotel){
//   //   console.log(hotel.name);
//   // });
//   return hotelsArr;
// })
// .catch( console.error.bind(console) );

// $.get('/api/activities')
// .then(function (activitiesArr) {
//   activities = activitiesArr;
//   activitiesArr.forEach(function(activity){
//     console.log(activity.name);
//   });
// })
// .catch( console.error.bind(console) );
