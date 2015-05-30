'use strict';

angular.module('myApp.view1', ['ngRoute', 'projectsService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: '/views/view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$location', '$http', 'projectsIndexService', function ($scope, $location, $http, projectsIndexService) {
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