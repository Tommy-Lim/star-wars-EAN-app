angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ){
  
    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    })
    .state('showMovieState', {
      url: '/movie/:id',
      component: 'showMovieComp'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }
]);
