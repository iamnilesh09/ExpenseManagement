var expenseapp = angular.module('expenseapp', [
    'navigationservice',
    'toastr',
    'phonecatControllers',
]);

expenseapp.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});

expenseapp.directive('dismissModal', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
          console.log(" In directive ");
        scope.dismiss = function() {
            $(element).modal('hide')
        };
      }
    } 
 });