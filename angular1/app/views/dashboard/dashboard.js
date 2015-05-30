'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'projectsService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: '/views/dashboard/dashboard.html',
      controller: 'DashboardController'
    });
  }])

  .controller('DashboardController', ['$scope', '$location', '$http', 'projectsIndexService', function ($scope, $location, $http, projectsIndexService) {
    $scope.message = "Woo hoo!";
    $scope.topping = ['prosciutto', 'arugula', 'summer squash'];
    projectsIndexService.get({},
      function success(response) {
        console.log("success: " + JSON.stringify(response));
        $scope.projectsList = response;
      },
      function error(errorResponse) {
        console.log("error: " + JSON.stringify(errorResponse));
      }
    )
  }]);