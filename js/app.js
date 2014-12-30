var dogs = new Dogs(); // Create a new Dogs Collection.
var router = new Router(); // Create a new Router to handle routes.
Backbone.history.start(); // Strat tracking routes history.
router.navigate('dogs'); // Start our app at the #dogs route by default.