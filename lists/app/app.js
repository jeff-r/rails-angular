import DS from 'ember-data';
import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);


App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'rails',
  headers: {
    "CONTENT_TYPE": "application/json"
  },
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    return s + ".json";
  },
});

console.log("woo hoo");

export default App;
