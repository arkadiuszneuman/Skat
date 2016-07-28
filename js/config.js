var app = angular.module('skatApp', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/newgame');
  //
  // Now set up the states
  $stateProvider
    .state('newgame', {
      url: '/newgame',
      templateUrl: 'partials/newgame.html',
      controller: 'newGameController'
    });

});
