const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

const userController = require("../controllers/user");

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);

// GET USER BY ID
router.get("/find/:id", verifyTokenAndAdmin, userController.getUserByID);

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, userController.getUserStats);

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);

module.exports = router;
