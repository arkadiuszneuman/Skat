var app = angular.module('skatApp', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/newgame");
  //
  // Now set up the states
  $stateProvider
    .state('newgame', {
      url: "/newgame",
      templateUrl: "partials/newgame.html"
    });

});
