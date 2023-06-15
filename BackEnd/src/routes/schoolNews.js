const router = require("express").Router();
const schoolNewsControl = require("../controllers/schoolNewsControl");

router.post("/", schoolNewsControl.post);
router.get("/", schoolNewsControl.get);
router.patch("/:id", schoolNewsControl.patch);
router.delete("/:id", schoolNewsControl.delete);

module.exports = router;
