(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.data = [['Site 1', '6/6/2017', '7/2/2017', 50,	35], ['Site 2', '7/9/2017', '9/23/2017', 100, 100], ['Site 3', '6/6/2017', '7/2/2017', 45, 23], ['Site 4', '6/6/2017', '7/2/2017', 42, 21], ['Site 5', '6/6/2017',	'7/2/2017', 60, 52], ['Site 6', '6/6/2017', '7/2/2017', 10, 10], ['Site 7', '6/6/2017',	'7/2/2017', 90, 32], ['Site 8', '6/6/2017', '7/2/2017', 80, 26], ['Site 9', '6/6/2017', '7/2/2017', 58, 32], ['Site 10', '6/6/2017', '7/2/2017', 89, 23]];
    vm.chartData = [50, 100, 45, 42, 60, 10, 90, 80, 58, 89];
    vm.chartLabels = ['Site 1', 'Site 2', 'Site 3', 'Site 4', 'Site 5', 'Site 6', 'Site 7', 'Site 8', 'Site 9', 'Site 10'];
    vm.gridLabels = ['7/2/2017', '9/23/2017', '7/2/2017', '7/2/2017', '7/2/2017', '7/2/2017', '7/2/2017', '7/2/2017', '7/2/2017', '7/2/2017'];
    vm.gridData = [35, 100, 23, 21, 52, 10, 32, 26, 32, 23];
  }
}());

//# sourceMappingURL=home-controller.js.map
