'use strict';

var helloWorldApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.projectsView',
  'myApp.view2',
  'myApp.version',
  'projectsIndexService'
]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
