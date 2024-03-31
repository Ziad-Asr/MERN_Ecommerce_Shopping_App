const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");
const cartController = require("../controllers/cart");

//GET ALL
router.get("/", verifyTokenAndAdmin, cartController.getAllCarts);

//GET USER CART
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.getUserCart
);

//CREATE CART
router.post("/", verifyToken, cartController.createCart);

//UPDATE CART
router.put("/:id", verifyTokenAndAuthorization, cartController.updateCart);

//DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);

module.exports = router;
