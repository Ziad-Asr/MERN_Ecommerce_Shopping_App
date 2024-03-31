const router = require("express").Router();
const orderController = require("../controllers/order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);

//GET USER ORDERS
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.getUserOrders
);

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, orderController.getMonthlyIncome);

//CREATE ORDER
router.post("/", verifyToken, orderController.createOrder);

//UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);

//DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);

module.exports = router;
