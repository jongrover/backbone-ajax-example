DogShowView = Backbone.View.extend({

  template: _.template($('#dog-show-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }
});