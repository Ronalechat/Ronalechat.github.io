(function() {
  'use strict';

  angular.module('app').component('navLeft', {
    controller: NavLeftController,
    controllerAs: 'vm',
    templateUrl: 'app/navLeft/navLeft.view.html',
  });

  /** @ngInject */
  function NavLeftController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    vm.hoverStatus = false;
    // Scope variables go here:
    // vm.variable = 'value';
    function activate() {
      $log.debug('Nav Left activated');
    }

    function toggleHoverStatus (mouseOver) {
      if (mouseOver) {
        vm.hoverStatus = true;
      } else {
        vm.hoverStatus = false;
      }
      console.log(vm.hoverStatus);
      return vm.hoverStatus;
    }

    $rootScope.currentState = {currentState:"Nav left"}
    console.log($rootScope.currentState);

  }

})();
