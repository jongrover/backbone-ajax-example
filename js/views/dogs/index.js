DogsIndexView = Backbone.View.extend({

  template: _.template($('#dogs-index-template').html()),

  events: {
    'click .destroy': 'destroy'
  },

  destroy: function (event) {
    if (window.confirm("Do you really want to destroy this dog?")) {
      var id = $(event.target).data('id'),
          dog = this.collection.get(id);
      dog.destroy();
    }
    event.preventDefault();
  },

  render: function () {
    this.$el.html(this.template({dogs: this.collection.toJSON() }));
    return this.el;
  }
});