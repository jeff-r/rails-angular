/**
 * Created by jeff on 5/23/15.
 */

'use strict';

var projectsService = angular.module('projectsService', ['ngResource']);

projectsService.factory('projectsService', ['$resource',
    function ($resource) {
      return $resource('http://localhost:8080/rails/projects/:id.json', {id: '@_id'}, {
        update: {method: "PUT"}
      });
    }]
);