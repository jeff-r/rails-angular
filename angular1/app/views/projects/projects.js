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

  .controller('ProjectsController', ['$scope', '$routeParams', '$location', '$http', 'projectsService',
                                    function ($scope, $routeParams, $location, $http, projectsService) {
    var projectId = $routeParams.id;

    $scope.updateProject = function() {
      console.log("Updating project " + projectId);
      $scope.project.$update({id: $scope.project.id, name: $scope.project.name});
      console.log("Updating project " + projectId);
    };

    $scope.deleteProject = function() {
      console.log("Deleting project " + projectId);
      $scope.project.$delete({id: $scope.project.id});
    }


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