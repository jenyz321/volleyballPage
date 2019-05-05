const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volleyballSchema = new Schema({
  opponent: { type: String, required: true },
  location: { type: String, required: true },
  startTime: Date,
  date: { type: Date, default: Date.now }
});

const Volleyball = mongoose.model("Volleyball", volleyballSchema);

module.exports = Volleyball;
