DogEditView = Backbone.View.extend({

  template: _.template($('#dog-edit-template').html()),

  events: {
    'click .update': 'update'
  },

  update: function () {
    this.model.set({
      fullname: $('.fullname').val(),
      age: $('.age').val(),
      fleas:$('.fleas').val()
    });
    router.navigate('dogs', {trigger: true});
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }
});