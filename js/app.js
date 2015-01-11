var dogs = new Dogs(); // Create a new Dogs Collection.
dogs.fetch(); // Sync Dogs Collection with Database.
var router = new Router(); // Create a new Router to handle routes.
Backbone.history.start(); // Start tracking routes history.