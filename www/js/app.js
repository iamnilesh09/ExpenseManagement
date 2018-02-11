// JavaScript Document
var expenseapp = angular.module('expenseapp', [
    'ui.router'
]);

expenseapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "index.html",
            controller: 'HomeCtrl'
        })
        .state('expense-create', {
            url: "/expense-create",
            templateUrl: "expenseAddEdit.html",
            controller: 'AddExpenseCtrl'
        })
        .state('expense-edit', {
            url: "/expense-edit/:id",
            templateUrl: "expenseAddEdit.html",
            controller: 'EditExpenseCtrl'
        })
        .state('expense-list', {
            url: "/delete-expense/:id",
            templateUrl: "expenseList.html",
            controller: 'ExpenseCtrl'
        })
        
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(isproduction);

});

expenseapp.filter('getID', function () {
    return function (content) {
        if (_.isObject(content)) {
            return content._id
        } else {
            return content
        }

    };
});