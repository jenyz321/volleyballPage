const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule.js"
router
  .route("/")
  .get(scheduleController.findAll)
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(scheduleController.findById)
  .put(scheduleController.update)
  .delete(scheduleController.remove);

//trying to make a route for coaches only to input games
router
  .route("/coaches")
  .post(scheduleController.create);
  

module.exports = router;
