import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: "one" },
      { name: "two" },
      { name: "three" },
      { name: "four" }
    ];
  }
});
