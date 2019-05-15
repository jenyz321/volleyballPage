const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router
  .route("/")
  .get(scheduleController.findAll)
  .post(scheduleController.create);
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(scheduleController.findById)
  .put(scheduleController.update)
  .delete(scheduleController.remove);

//trying to make a route for coaches only to input games
// Matches with ("")
router
  .route("/AddGames")
  .post(scheduleController.create);
  

module.exports = router;
