var dogs = new Dogs(); // Create a new Dogs Collection.
var router = new Router(); // Create a new Router to handle routes.
Backbone.history.start(); // Start tracking routes history.
dogs.fetch(); // Sync Dogs Collection with Database.