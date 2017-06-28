var hotels;
var restaurants;
var activities;

//Append it to the DOM as option elements for the correct select elements
$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    console.log(restaurant.name);
  });
})
.catch( console.error.bind(console) );

$.get('/api/hotels')
.then(function (hotelsArr) {
  hotels = hotelsArr
  console.log(hotels);
  // hotels.forEach(function(hotel){
  //   console.log(hotel.name);
  // });
})
.catch( console.error.bind(console) );

$.get('/api/activities')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    console.log(restaurant.name);
  });
})
.catch( console.error.bind(console) );
