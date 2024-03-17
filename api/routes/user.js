const router = require("express").Router();

const userController = require("../controllers/user");

router.get("/userTest", userController.getTest);
router.post("/postTest", userController.postTest);

module.exports = router;
