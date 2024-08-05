const mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({ _id: String, name: String, amount: Number, spent: Number, date: String, persist: Boolean });
let Category = mongoose.model("Category", categorySchema);

module.exports = Category;