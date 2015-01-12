Router = Backbone.Router.extend({

  routes: {
    'dogs/new': 'new',         // #dogs/new
    'dogs/:id/edit': 'edit',   // #dogs/1/edit
    'dogs/:id': 'show',        // #dogs/1
    'dogs': 'index',           // #dogs
    '': 'index'                // #
  },

  displayView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $('main').html(this.currentView.render());
  },

  new: function () {
    this.displayView(new DogEditView());
  },

  edit: function (id) {
    var dog = dogs.get(id);
    dog.editView = new DogEditView({model: dog});
    this.displayView(dog.editView);
  },

  show: function (id) {
    var dog = dogs.get(id);
    dog.view = new DogShowView({model: dog});
    this.displayView(dog.view);
  },

  index: function () {
    dogs.view = new DogsIndexView({collection: dogs});
    this.displayView(dogs.view);
  }
});