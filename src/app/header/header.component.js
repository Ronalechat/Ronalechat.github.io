(function() {
  'use strict';

  angular.module('app').component('header', {
    controller: HeaderController,
    controllerAs: 'vm',
    templateUrl: 'app/header/header.view.html',
  });

  /** @ngInject */
  function HeaderController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';
    function activate() {
      $log.debug('header activated');
    }

    $rootScope.currentState = {currentState:"Header"}
    console.log($rootScope.currentState);

  }

})();
