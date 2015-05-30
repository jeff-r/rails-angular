/**
 * Created by jeff on 5/30/15.
 */

'use strict';

angular.module('myApp.projectsView', ['ngRoute', 'projectsService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects/:id', {
      templateUrl: '/views/projects/projects.html',
      controller: 'ProjectsController'
    });
  }])

  .controller('ProjectsController', ['$scope', '$routeParams', '$location', '$http', 'projectsService', function ($scope, $routeParams, $location, $http, projectsService) {
    var projectId = $routeParams.id;
    projectsService.get({id: projectId},
      function success(response) {
        console.log("success: " + JSON.stringify(response));
        $scope.project = response;
      },
      function error(errorResponse) {
        console.log("error: " + JSON.stringify(errorResponse));
      }
    )
  }]);