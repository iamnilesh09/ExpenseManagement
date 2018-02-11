angular.module('phonecatControllers', ['navigationservice', 'toastr']).controller('ExpenseCtrl', function ($scope, NavigationService, toastr) {
  $scope.noRecordFlag = false;
  $scope.newExpenseRecord = {};
  $scope.editExpenseRecord = {};
  //Get all expenses
  $scope.getAllExpenses = function (keywordChange) {
    NavigationService.getAllExpenseAPI({}, function (records) {
      if (records.value) {
        $scope.expenses = records.data;
      } else {
        $scope.expenses = [];
        $scope.noRecordFlag = true;
      }
    });
  };

  $scope.getAllExpenses();

  //Update expense
  $scope.updateExpense = function (record) {
    NavigationService.updateExpenseAPI(record, function (records) {
      if (records.value) {
        $scope.getAllExpenses();
        $scope.editExpenseRecord = {};
        toastr.success("Expense updated successfully.", "Expense updated");
      } else {
        toastr.error("There was an error while updating expense", "Expense upadting error");
      }
    });
  };

  //Delete Expense
  $scope.deleteExpense = function (id) {
    NavigationService.deleteExpenseAPI({_id:$scope.deleteId}, function (records) {
      if (records.value) {
        $scope.getAllExpenses();
        toastr.success("Expense deleted successfully.", "Expense deleted");
      } else {
        toastr.error("There was an error while deleting expense", "Expense deleting error");
        }
    });
  };

  //save Expense
  $scope.saveExpense = function (data) {
    NavigationService.saveExpenseAPI(data, function (records) {
      if (records.value) {
        // $scope.dismiss();
        $scope.newExpenseRecord = {};
        $scope.getAllExpenses();
        toastr.success("Expense added successfully.", "Expense added");
      } else {
        toastr.error("There was an error while adding expense", "Expense adding error");
      }
    });
  };

  //Get One Expense Record
  $scope.getOneExpense = function (records) {
      $scope.editExpenseRecord = records
  };

  //Get delete id
  $scope.deleteOneExpense = function (id) {
    $scope.deleteId = id
};

})
