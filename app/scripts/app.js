'use strict';

angular.module('webappAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/about', { templateUrl: 'views/about.html', controller: 'MainCtrl' })
      .when('/download', { templateUrl: 'views/download.html', controller: 'MainCtrl' })
      .when('/documentation', { templateUrl: 'views/documentation.html', controller: 'MainCtrl' })
      .otherwise({ redirectTo: '/' });
  });
