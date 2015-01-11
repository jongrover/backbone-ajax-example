DogEditView = Backbone.View.extend({

  template: _.template($('#dog-edit-template').html()),

  events: {
    'click .update': 'update'
    // 'click .cancel': 'cancel'
  },

  update: function (event) {
    this.model.save({
      fullname: $('.fullname').val(),
      age: $('.age').val(),
      fleas:$('.fleas').val()
    });
    event.preventDefault();
  },

  // cancel: function (event) {
  //   this.model.collection.remove(this.model);
  //   event.preventDefault();
  // },

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