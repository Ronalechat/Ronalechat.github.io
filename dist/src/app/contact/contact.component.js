(function() {
  'use strict';

  angular.module('app').component('contact', {
    controller: ContactController,
    controllerAs: 'vm',
    templateUrl: 'app/contact/contact.view.html',
  });

  /** @ngInject */
  function ContactController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';

    vm.showSampleConstant = showSampleConstant;
    vm.switchLanguage = switchLanguage;

    activate();

    function activate() {
      $log.debug('contact activated');
    }

    function showSampleConstant() {
      alert(SAMPLE_CONSTANT);
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

    $rootScope.currentState = {currentState:"Contact"}
    console.log($rootScope.currentState);

  }

})();
