var siteUrl = "http://localhost:80/"
var navigationservice = angular.module('navigationservice', [])
    .factory('NavigationService', function ($http) {
        return {
            getAllExpenseAPI: function (formData, callback) {
                $http.post(siteUrl + 'Expense/getAllExpense', formData).then(function (records) {
                    callback(records.data);
                });
            },
            getOneExpenseAPI: function (formData, callback) {
                $http.post(siteUrl + 'Expense/getOneExpense', formData).then(function (records) {
                    callback(records.data);
                });
            },
            saveExpenseAPI: function (formData, callback) {
                $http.post(siteUrl + 'Expense/saveExpense', formData).then(function (records) {
                    callback(records.data);
                });
            },
            updateExpenseAPI: function (formData, callback) {
                $http.post(siteUrl + 'Expense/updateExpense', formData).then(function (records) {
                    callback(records.data);
                });
            },
            deleteExpenseAPI: function (formData, callback) {
                $http.post(siteUrl + 'Expense/deleteExpense', formData).then(function (records) {
                    callback(records.data);
                });
            },
        };
    })