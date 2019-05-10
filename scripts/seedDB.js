const mongoose = require("mongoose");
const db = require("../models");

// This file empties the volleyball collection and inserts the schedule below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/volleyballdb"
);

const scheduleSeed = [
  {
    date: "08/28/19",
    opponent: "Pineapple Cove",
    location: "address",
    startTime: "5:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
    
  },
  {
    date: "08/30/19",
    opponent: "Trinity Lutheran",
    location: "Home",
    startTime: "4:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
    
  },
  {
    date: "09/04/19",
    opponent: "Royal Palm",
    location: "Home",
    startTime: "5:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "09/06/19",
    opponent: "Brevard Academy",
    location: "Home",
    startTime: "4:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "09/11/19",
    opponent: "Calvary",
    location: "Home",
    startTime: "4:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "09/13/19",
    opponent: "Holy Trinity",
    location: "Away",
    startTime: "5:00",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "09/20/19",
    opponent: "Viera Charter",
    location: "Away",
    startTime: "5:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "09/24/19",
    opponent: "Calvary",
    location: "Away",
    startTime: "5:00",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "10/02/19",
    opponent: "Bethany",
    location: "Home",
    startTime: "4:30",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
  },
  {
    date: "10/04/19",
    opponent: "MICS",
    location: "Away",
    startTime: "5:15",
    snackFamily: "your mom",
    addInfo: "Leave time is 4:30, google map directions."
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
