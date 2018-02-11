/**
 * ExpenseController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getAllExpense: function (req, res) {
        if (req.body) {
            Expense.getAllExpense(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },  
    saveExpense: function (req, res) {
        if (req.body) {
            Expense.saveExpense(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },  
    updateExpense: function(req,res) {
        if (req.body) {
            Expense.updateExpense(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
    deleteExpense: function(req,res) {
        if (req.body) {
            Expense.deleteExpense(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    }
};