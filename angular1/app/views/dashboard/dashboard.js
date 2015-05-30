'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'projectsService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: '/views/dashboard/dashboard.html',
      controller: 'DashboardController'
    });
  }])

  .controller('DashboardController', ['$scope', '$location', '$http', '$route', 'projectsService', function ($scope, $location, $http, $route, projectsService) {

    $scope.loadData = function() {
      projectsService.query({},
        function success(response) {
          console.log("success: " + JSON.stringify(response));
          $scope.projectsList = response;
        },
        function error(errorResponse) {
          console.log("error: " + JSON.stringify(errorResponse));
        }
      )
    };

    $scope.deleteProject = function(project) {
      console.log("delete");
      project.$delete({id: project.id}, function() {
        $scope.loadData();
      });
    };

    $scope.addProject = function() {
      projectsService.save({name: $scope.newProjectName},
        function() {
          console.log("success!");
          $scope.loadData();
        },
      function() {
        console.log("Failure!");
      }
      );
    };

    $scope.loadData();
  }]);