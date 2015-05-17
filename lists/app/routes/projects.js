import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax("http://localhost:8080/rails/projects.json");
  }
});
