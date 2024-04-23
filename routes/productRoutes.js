const router = require("express").Router();

const productsController = require("../controllers/productsController.js");

router.get("/", productsController.getAllProducts);

router.post("/", productsController.createProduct);

router.get("/:id", productsController.getProductById);

router.put("/:id", productsController.updateProduct);

router.delete("/:id", productsController.deteleProduct);

module.exports = router;
