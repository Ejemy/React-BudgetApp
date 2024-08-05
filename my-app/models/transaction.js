const mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({ _id: String, memo: String, date: Date, category: String, expense: Number, income: Number });
let Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;