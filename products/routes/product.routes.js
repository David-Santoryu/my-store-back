"use strict";

const ProductController = require("../controllers/product.controller");

exports.productRoutes = function (app) {
  app.get("/api/get_products", ProductController.getAllProducts);
  app.post("/api/add_product", ProductController.addProduct);
  app.delete("/api/delete_product", ProductController.deleteProduct);

  app.put("/api/modify_product", ProductController.modifyProduct);
};
