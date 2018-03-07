(function() {
  'use strict';

  angular.module('app').component('navRight', {
    controller: NavRightController,
    controllerAs: 'vm',
    templateUrl: 'app/navRight/navRight.view.html',
  });

  /** @ngInject */
  function NavRightController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';
    function activate() {
      $log.debug('Nav Right activated');
    }

    $rootScope.currentState = {currentState:"Nav right"}
    console.log($rootScope.currentState);

  }

})();
