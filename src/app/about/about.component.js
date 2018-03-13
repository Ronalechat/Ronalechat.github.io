(function() {
  'use strict';

  angular.module('app').component('about', {
    controller: AboutController,
    controllerAs: 'vm',
    templateUrl: 'app/about/about.view.html',
  });

  /** @ngInject */
  function AboutController($log, $rootScope, $translate, SAMPLE_CONSTANT) {
    var vm = this;

    // Scope variables go here:
    // vm.variable = 'value';

    // vm.showSampleConstant = showSampleConstant;
    // vm.switchLanguage = switchLanguage;

    activate();

    function activate() {
      $log.debug('home activated');
    }

    function showSampleConstant() {
      alert(SAMPLE_CONSTANT);
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

    $rootScope.currentState = {currentState:"About"}
    console.log($rootScope.currentState);

  }

})();
