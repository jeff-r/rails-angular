/**
 * Created by jeff on 5/23/15.
 */

'use strict';

var projectsService = angular.module('projectsService', ['ngResource']);

projectsService.factory('projectsService', ['$resource',
    function ($resource) {
      return $resource('http://localhost:8080/rails/projects/:id.json', {}, {
        get: {method: "GET", cache: false, isArray: false}
      })
    }]
);

var projectsIndexService = angular.module('projectsIndexService', ['ngResource']);

projectsIndexService.factory('projectsIndexService', ['$resource',
    function ($resource) {
      return $resource('http://localhost:8080/rails/projects.json', {}, {
        get: {method: "GET", cache: false, isArray: true}
      })
    }]
);