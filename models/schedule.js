const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  date: { type: Date, required: true },
  opponent: { type: String, required: true },
  location: { type: String, required: true },
  startTime: { type: Number, required: true},
  snackFamily: { type: String},
  addInfo: { type: String}
  
});

const Schedule = mongoose.model("Volleyball", scheduleSchema);

module.exports = Schedule;
