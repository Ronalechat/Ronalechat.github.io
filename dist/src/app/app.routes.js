(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home',
      })
      .state('about', {
        url: '/about',
        component: 'about',
      })
      .state('contact', {
        url: '/contact',
        component: 'contact',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
