DogEditView = Backbone.View.extend({

  template: _.template($('#dog-edit-template').html()),

  events: {
    'click .submit': 'submit',
    'click .cancel': 'cancel'
  },

  // hitting back button here is like cancel, but creates a zombie model! Must fix.

  saveModel: function () {
    this.model.save({
      fullname: $('.fullname').val(),
      age: $('.age').val(),
      fleas:$('.fleas').val()
    });
  },

  submit: function (event) {
    if (this.model.isNew()) {
      dogs.add(this.model); // add to collection.
      this.saveModel();
    } else {
      this.saveModel();
    }
    event.preventDefault();
  },

  cancel: function (event) {
    if (this.model.isNew()) {
      this.model.destroy(); // returns false because the model does not yet exist on the server.
      router.navigate('dogs', {trigger: true}); // force router to navigate since destroy event doesn't trigger on model.
    } else {
      router.navigate('dogs', {trigger: true});
    }
    event.preventDefault();
  },

  render: function () {
    if (this.model.isNew()) {
      var adjective = 'New',
          verb = 'Create';
    } else {
      var adjective = 'Edit',
          verb = 'Update';
    }
    this.$el.html(this.template({adj:adjective, verb: verb, dog: this.model.toJSON()}));
    return this.el;
  }
});