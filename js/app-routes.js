(function () {
  'use strict';

  angular
    .module('piechart')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());

//# sourceMappingURL=app-routes.js.map
