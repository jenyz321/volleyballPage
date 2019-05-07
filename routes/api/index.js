const router = require("express").Router();
const scheduleRoutes = require("./schedule");

// Book routes
router.use("/schedule", scheduleRoutes);

module.exports = router;
