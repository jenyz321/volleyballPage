const mongoose = require("mongoose");
const db = require("../models");

// This file empties the volleyball collection and inserts the schedule below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/volleyballdb"
);

const scheduleSeed = [
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
    
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  },
  {
    opponent: "Pineapple Cove",
    location: "Away",
    startTime: "5:30",
    date: new Date(Date.now())
  }
];

db.Volleyball
  .remove({})
  .then(() => db.Volleyball.collection.insertMany(scheduleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
