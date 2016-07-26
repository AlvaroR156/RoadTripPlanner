'use strict';

/**
 * @ngdoc overview
 * @name roadTripPlannerApp
 * @description
 * # roadTripPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('roadTripPlannerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
