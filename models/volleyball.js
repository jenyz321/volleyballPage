const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  opponent: { type: String, required: true },
  location: { type: String, required: true },
  startTime: { type: Number, required: true},
  date: { type: Date, required: true }
});

const Volleyball = mongoose.model("Volleyball", scheduleSchema);

module.exports = Volleyball;
