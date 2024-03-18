const router = require("express").Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

const productController = require("../controllers/product");

//GET ALL PRODUCTS
router.get("/", productController.getAllProducts);

//GET PRODUCT BY ID
router.get("/find/:id", productController.getProduct);

//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, productController.createProduct);

//UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);

module.exports = router;
