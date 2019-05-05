const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  opponent: { type: String, required: true },
  location: { type: String, required: true },
  startTime: Date,
  date: { type: Date, default: Date.now }
});

const Volleyball = mongoose.model("Volleyball", scheduleSchema);

module.exports = Volleyball;
