Dog = Backbone.Model.extend({

  initialize: function () {
    this.on('sync', function () {
      router.navigate('dogs', {trigger: true});
    });
    this.on('destroy', function () {
      router.navigate('');
    });
  },

  defaults: {
    fullname: 'unknown',
    age: 0,
    fleas: false
  },

  url: function () {
    if (this.isNew()) {
      return 'http://localhost:3000/dogs';
    } else {
      return 'http://localhost:3000/dogs/'+this.id;
    }
  }
});

Dogs = Backbone.Collection.extend({

  model: Dog,

  url: 'http://localhost:3000/dogs'
});