(function() {
  'use strict';

  angular.module('app').component('navFooter', {
    controller: NavFooterController,
    controllerAs: 'vm',
    templateUrl: 'app/navFooter/navFooter.view.html',
  });

  /** @ngInject */
  function NavFooterController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';
    function activate() {
      $log.debug('Nav activated');
    }

    $rootScope.currentState = {currentState:"Nav footer"}
    console.log($rootScope.currentState);

  }

})();
