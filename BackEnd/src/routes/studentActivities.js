const router = require("express").Router();
const studentActivitiesControl = require("../controllers/studentActivitiesControl");

router.post("/", studentActivitiesControl.post);
router.get("/", studentActivitiesControl.get);
router.patch("/:id", studentActivitiesControl.patch);
router.delete("/:id", studentActivitiesControl.delete);
module.exports = router;
