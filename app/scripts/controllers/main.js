'use strict';

//angular.module('webappAngularApp', ['angular-google-analytics'])
angular.module('webappAngularApp')

//  .config(function('AnalyticsProvider') {
//    AnalyticsProvider.setAccount('UA-49288045-1');
//    AnalyticsProvider.trackPages(true);
//    AnalyticsProvider.useAnalytics(false); // analytics.js instead of ga.js ?
//    AnalyticsProvider.useEnhancedLinkAttribution(true);
//    AnalyticsProvider.setPageEvent('$stateChangeSuccess');
//  })

  .controller('MainCtrl', function ($scope, $location, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
