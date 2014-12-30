Dogs = Backbone.Collection.extend({

  initialize: function () {
    this.view = new DogsIndexView({collection: this});
  },

  model: Dog
});