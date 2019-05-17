const express = require("express");

const mongoose = require("mongoose");
const passport = require('passport');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
// Connect to the Mongo DB
let databaseUri = "mongodb://localhost/volleyballdb";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect(databaseUri, { useNewUrlParser: true, useCreateIndex: true });
};
let db = mongoose.connection; 

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
})
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);


// Add routes, both API and view
app.use(routes);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
