'use strict';
//
// angular.module('teachercraftApp', []);

// tcApp.controller('GreetingController', ['$scope', function($scope) {
//   $scope.greeting = 'Hola!';
// }]);




//Declare app level module which depends on filters, and services
var app = angular.module('teacherCraft', ['teacherCraft.directives','ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      controller: 'ProductListController',
      templateUrl: 'partial/1'
    })
    .when('/product/:id', {
     controller: 'ProductDetailController',
     templateUrl: 'partial/2'
   })
    .when('/admin', {
      controller: 'ProductListController',
      templateUrl: 'partial/3'
    })
   .otherwise({
     redirectTo: '/'
   });
    $locationProvider.html5Mode(true);
  }]);
