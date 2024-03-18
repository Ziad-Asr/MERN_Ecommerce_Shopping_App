const router = require("express").Router();

const stripeController = require("../controllers/stripe");

router.post("/payment", stripeController.stripePayment);

module.exports = router;
