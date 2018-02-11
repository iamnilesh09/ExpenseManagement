var schema = new Schema({
    name: String,
    description: String,
    amount: Number
  });
  
  module.exports = mongoose.model('Expense',schema);
  var model = {
     getAllExpense: function(data,callback) {
         Expense.find().lean().exec(function(err,records){
             if(err) {
                 callback(err);
             } else {
                 callback(null,records)
             }
         });
     },
     getOneExpense: function(data,callback) {
         Expense.findOne({_id:data._id}).exec(function(err,records){
             if(err) {
                 callback(err);
             } else {
                 callback(null,records)
             }
         });
     },
     updateExpense: function(data,callback) {
         Expense.update({_id:data._id},data).lean().exec(function(err,records){
             if(err) {
                 callback(err);
             } else {
                 callback(null,records)
             }
         });
     },
     deleteExpense: function(data,callback) {
         Expense.deleteOne({_id:data._id}).exec(function(err,records){
             if(err) {
                 callback(err);
             } else {
                 callback(null,records)
             }
         });
     },
     saveExpense: function(data,callback){
         var recordData = this(data);
         recordData.save(function(err,records){
             if(err) {
                 callback(err);
             } else {
                 callback(null,records)
             }
         });
     },
  }; 
  module.exports = _.assign(module.exports,model);