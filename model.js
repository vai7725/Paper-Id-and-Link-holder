const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  paperName: String,
  paperLink: String,
});

module.exports = mongoose.model("paper", paperSchema);
